import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsDate()
  deletedAt?: Date;
}
