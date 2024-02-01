// app.controller.ts

import {
  Controller,
  Get,
  Post,
  // Put,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { ServiceReservationService } from './service-reservation.service';
// import { CreateServiceReservationDto } from './dto/create-service-reservation.dto';
// import { UpdateServiceReservationDto } from './dto/update-service-reservation.dto';
import { service_reservation } from 'src/typeorm/entities/servicio-reserva';

@Controller('api/service-reservation/reservation')
export class ServiceReservationController {
  constructor(
    private readonly serviceReservationService: ServiceReservationService,
  ) {}

  @Get()
  async getServiceReservations(): Promise<service_reservation[]> {
    return await this.serviceReservationService.getServiceReservations();
  }

  @Post()
  async createServiceReservation(
    @Body() serviceReservation: service_reservation,
  ): Promise<service_reservation> {
    return await this.serviceReservationService.createServiceReservation(
      serviceReservation,
    );
  }

  @Delete(':id')
  async deleteServiceReservation(@Param('id') id: string): Promise<void> {
    await this.serviceReservationService.deleteServiceReservation(id);
  }
}
