import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateReservationDto {
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;

  @IsNotEmpty()
  date: Date;

  @IsOptional()
  destination: string;

  @IsNumber()
  @IsNotEmpty()
  passengers: number;
}
