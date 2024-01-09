import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceReservationDto } from './dto/CreateServiceReservation.dto';
import { UpdateServiceReservationDto } from './dto/update-service-reservation.dto';
@Injectable()
export class ServiceReservationService {
  private readonly reservations: Record<string, CreateServiceReservationDto> =
    {};

  reserveService(serviceName: string): string {
    const reservationId = this.generateReservationId();
    const reservation: CreateServiceReservationDto = {
      serviceName,
      reservationDate: new Date().toISOString(),
    };
    this.reservations[reservationId] = reservation;
    return reservationId;
  }
  updateReservation(
    reservationId: string,
    updateDto: UpdateServiceReservationDto,
  ): void {
    if (!this.reservations[reservationId]) {
      throw new NotFoundException('Reservation not found');
    }

    this.reservations[reservationId] = {
      ...this.reservations[reservationId],
      ...updateDto,
    };
  }
  getReservations(): string[] {
    return Object.keys(this.reservations);
  }

  private generateReservationId(): string {
    return Math.random().toString(36).substring(7);
  }
}
