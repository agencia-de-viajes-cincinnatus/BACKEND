import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from 'src/typeorm/entities/Reservation';
import {
  CreateReservationParams,
  UpdateReservationParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  findReservations() {
    return this.reservationRepository.find();
  }

  createReservations(reservationDetails: CreateReservationParams) {
    const newReservation = this.reservationRepository.create({
      ...reservationDetails,
      date: new Date().toISOString().split('T')[0],
    });

    return this.reservationRepository.save(newReservation);
  }

  updateReservation(
    id: string,
    updateReservationDetails: UpdateReservationParams,
  ) {
    return this.reservationRepository.update(
      { id },
      { ...updateReservationDetails },
    );
  }
}
