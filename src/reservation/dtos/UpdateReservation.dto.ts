import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateReservationDto {
  @IsString()
  @IsNotEmpty()
  destination: string;

  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;
}
