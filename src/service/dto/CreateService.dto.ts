import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
