import { Transform } from 'class-transformer';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Transform((password) => password.value.trim())
  @IsString()
  @MinLength(8)
  password: string;
}
