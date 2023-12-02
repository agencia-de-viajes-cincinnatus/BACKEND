import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Destination } from 'src/typeorm/entities/Destination';

export class CreateReservationDto {
  destination: Destination;

  date: Date;

  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;

  @IsString()
  @IsNotEmpty()
  employee: string;
}
