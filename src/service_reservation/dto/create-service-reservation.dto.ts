import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateServiceReservationDto {
  @IsDateString()
  @IsNotEmpty()
  readonly reservation: string;

  @IsDateString()
  @IsNotEmpty()
  readonly service: string;
}
