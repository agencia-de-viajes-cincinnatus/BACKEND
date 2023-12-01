import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateReservationDto } from './dtos/CreateReservation.dto';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}
  @Get()
  async getReservations() {
    return this.reservationService.findReservations();
  }

  @Post()
  createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservations(createReservationDto);
  }
}
