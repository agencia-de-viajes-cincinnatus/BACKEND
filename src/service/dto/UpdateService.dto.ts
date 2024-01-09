import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  date: Date;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsOptional()
  supplier: string;
}
