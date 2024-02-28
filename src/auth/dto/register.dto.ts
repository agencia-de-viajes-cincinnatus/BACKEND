import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  rol: string;

  @Transform((password) => password.value.trim())
  @IsString()
  @MinLength(8)
  password: string;
}
