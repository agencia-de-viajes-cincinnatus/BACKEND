import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class UpdateServiceReservationDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly serviceName?: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  readonly reservationDate?: string;
}
