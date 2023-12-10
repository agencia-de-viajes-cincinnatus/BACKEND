import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
}
