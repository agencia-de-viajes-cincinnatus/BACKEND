import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReservationDto } from './dtos/CreateReservation.dto';
import { ReservationService } from './reservation.service';
import { UpdateReservationDto } from './dtos/UpdateReservation.dto';

@Controller('api/reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}
  @Get()
  async getReservations() {
    return this.reservationService.findReservations();
  }

  @Get(':id')
  async getReservationById(@Param('id', ParseUUIDPipe) id: string) {
    return this.reservationService.findReservationById(id);
  }

  @Post()
  createReservation(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.createReservation(createReservationDto);
  }

  @Patch(':id')
  async updateReservationById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    await this.reservationService.updateReservation(id, updateReservationDto);
  }

  @Delete(':id')
  async deleteReservationById(@Param('id', ParseUUIDPipe) id: string) {
    await this.reservationService.deleteReservation(id);
  }
}
