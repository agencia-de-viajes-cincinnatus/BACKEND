import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/register.dto';

import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtservice: JwtService,
  ) {}
  async register({ username, email, password }: RegisterDto) {
    const user = await this.userService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists');
    }
    return await this.userService.create({
      username,
      email,
      password: await bcryptjs.hash(password, 10),
    });
  }

  async login({ email, password }: LoginDto, response) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { email: user.email };

    const token = await this.jwtservice.signAsync(payload);

    response.cookie('jwt', token, { httpOnly: true });

    return { token, email };
  }
}
