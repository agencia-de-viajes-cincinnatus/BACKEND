import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/typeorm/entities/Destination';
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
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

  findReservations() {
    return this.reservationRepository.find({ relations: ['destination'] });
  }

  findReservationById(id: string) {
    return this.reservationRepository.findOne({
      where: { id },
      relations: ['destination'],
    });
  }

  async createReservation(
    destinationId: string,
    reservationDetails: CreateReservationParams,
  ) {
    const destination = await this.destinationRepository.findOneBy({
      id: destinationId,
    });

    if (!destination)
      throw new HttpException(
        'Destination not found. Cannot create Reservation',
        HttpStatus.BAD_REQUEST,
      );

    const newReservation = this.reservationRepository.create({
      ...reservationDetails,
      date: new Date(reservationDetails.date).toISOString().split('T')[0],
      destination,
    });

    return this.reservationRepository.save(newReservation);
  }

  async updateReservation(
    id: string,
    updateReservationDetails: UpdateReservationParams,
  ) {
    const destination = await this.destinationRepository.findOneBy({
      id: updateReservationDetails?.destination,
    });

    if (!destination)
      throw new HttpException(
        'Destination not found. Cannot update Reservation',
        HttpStatus.BAD_REQUEST,
      );

    return this.reservationRepository.update(
      { id },
      { ...updateReservationDetails, destination },
    );
  }

  deleteReservation(id: string) {
    return this.reservationRepository.delete(id);
  }
}
