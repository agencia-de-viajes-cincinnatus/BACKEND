import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateReservationDto {
  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;
}
