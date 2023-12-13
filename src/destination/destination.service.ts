import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/typeorm/entities/Destination';
import {
  CreateDestinationParams,
  UpdateDestinationParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';
import * as fs from 'fs';

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

  updateDestination(
    id: string,
    updateDestinationDetails: UpdateDestinationParams,
  ) {
    return this.destinationRepository.update(
      { id },
      { ...updateDestinationDetails },
    );
  }

  uploadFile(id: string, file: string) {
    if (file) {
      return this.destinationRepository.update({ id }, { image: file });
    }

    return {
      message: 'No file provided',
    };
  }

  async deleteDestination(id: string) {
    const destination = await this.destinationRepository.findOneBy({ id });

    fs.unlink(`./uploads/destinationImages/${destination.image}`, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('File deleted successfully');
    });

    return this.destinationRepository.delete(id);
  }
}
