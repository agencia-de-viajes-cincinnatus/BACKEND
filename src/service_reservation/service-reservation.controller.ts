// app.controller.ts

import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { ServiceReservationService } from './service-reservation.service';
import { CreateServiceReservationDto } from './dto/CreateServiceReservation.dto';
import { UpdateServiceReservationDto } from './dto/update-service-reservation.dto';

@Controller('services')
export class AppController {
  constructor(
    private readonly serviceReservationService: ServiceReservationService,
  ) {}

  @Post('reserve')
  reserveService(@Body() body: CreateServiceReservationDto): {
    reservationId: string;
  } {
    const { serviceName } = body;
    const reservationId =
      this.serviceReservationService.reserveService(serviceName);
    return { reservationId };
  }

  @Put('update/:reservationId')
  updateReservation(
    @Param('reservationId') reservationId: string,
    @Body() body: UpdateServiceReservationDto,
  ): { success: boolean } {
    this.serviceReservationService.updateReservation(reservationId, body);
    return { success: true };
  }

  @Get('reservations')
  getReservations(): { reservations: string[] } {
    const reservations = this.serviceReservationService.getReservations();
    return { reservations };
  }
}
