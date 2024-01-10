import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateServiceReservationDto {
  @IsString()
  @IsNotEmpty()
  readonly serviceName: string;

  @IsDateString()
  @IsNotEmpty()
  readonly reservationDate: string;
}
