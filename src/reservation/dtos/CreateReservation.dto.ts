import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;
}
