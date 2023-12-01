import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;
}
