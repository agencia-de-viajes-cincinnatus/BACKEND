import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateReservationDto {
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;

  @IsNotEmpty()
  date: Date;
}
