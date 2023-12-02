import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/typeorm/entities/Destination';
import {
  CreateDestinationParams,
  UpdateDestinationParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

  findDestinations() {
    return this.destinationRepository.find();
  }

  findDestinationById(id: string) {
    return this.destinationRepository.findOneBy({ id });
  }

  createDestination(destinationDetails: CreateDestinationParams) {
    const newDestination = this.destinationRepository.create({
      ...destinationDetails,
    });

    return this.destinationRepository.save(newDestination);
  }

  updateReservation(
    id: string,
    updateDestinationDetails: UpdateDestinationParams,
  ) {
    return this.destinationRepository.update(
      { id },
      { ...updateDestinationDetails },
    );
  }

  deleteReservation(id: string) {
    return this.destinationRepository.delete(id);
  }
}
