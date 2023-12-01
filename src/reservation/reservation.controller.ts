import { Controller, Get, Post } from '@nestjs/common';

@Controller('reservation')
export class ReservationController {
  @Get()
  getReservations() {}

  @Post()
  createReservation() {}
}
