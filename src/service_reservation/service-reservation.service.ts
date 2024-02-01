import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { CreateServiceReservationDto } from './dto/create-service-reservation.dto';
// import { UpdateServiceReservationDto } from './dto/update-service-reservation.dto';
import { service_reservation } from 'src/typeorm/entities/servicio-reserva';
import { Repository } from 'typeorm';
import { CreateServiceReservationDto } from './dto/create-service-reservation.dto';
import { UpdateServiceReservationDto } from './dto/update-service-reservation.dto';

@Injectable()
export class ServiceReservationService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createReservation(id: string, body: CreateServiceReservationDto) {
    throw new Error('Method not implemented.');
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateReservation(reservationId: string, body: UpdateServiceReservationDto) {
    throw new Error('Method not implemented.');
  }
  getReservations() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(service_reservation)
    private readonly serviceReservationRepository: Repository<service_reservation>,
  ) {}

  // async getServiceReservationById(id: string): Promise<service_reservation> {
  //   return await this.serviceReservationRepository.findOne(id);
  // }

  async getServiceReservations(): Promise<service_reservation[]> {
    return await this.serviceReservationRepository.find();
  }

  async createServiceReservation(
    serviceReservation: service_reservation,
  ): Promise<service_reservation> {
    return await this.serviceReservationRepository.save(serviceReservation);
  }

  async deleteServiceReservation(id: string): Promise<void> {
    await this.serviceReservationRepository.delete(id);
  }
}
