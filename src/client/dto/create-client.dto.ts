import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  identification: string;

  @IsString()
  @MaxLength(13)
  @IsNotEmpty()
  phone: string;

  @IsString()
  preferences: string;
}
