import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateReservationDto } from './dtos/CreateReservation.dto';
import { ReservationService } from './reservation.service';
import { UpdateReservationDto } from './dtos/UpdateReservation.dto';

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

  @Patch(':id')
  async updateReservationById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    await this.reservationService.updateReservation(id, updateReservationDto);
  }

}
