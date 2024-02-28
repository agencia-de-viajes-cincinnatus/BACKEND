import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/typeorm/entities/Destination';
import {
  CreateDestinationParams,
  UpdateDestinationParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class DestinationService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
    credentials: {
      accessKeyId: this.configService.getOrThrow('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.getOrThrow('AWS_SECRET_ACCESS_KEY'),
    },
  });

  constructor(
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
    private readonly configService: ConfigService,
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

  async uploadFile(
    id: string,
    file: string,
    fileBuffer: Buffer,
    fileType: string,
  ) {
    if (file) {
      await this.s3Client.send(
        new PutObjectCommand({
          Bucket: 'sunshine-air',
          Key: file,
          Body: fileBuffer,
          ContentType: fileType,
          ACL: 'public-read',
        }),
      );

      return this.destinationRepository.update({ id }, { image: file });
    }

    return {
      message: 'No file provided',
    };
  }

  async getImage(file: string) {
    const getObjectParams = {
      Bucket: 'sunshine-air',
      Key: file,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(this.s3Client, command);
    return url;
  }

  async deleteDestination(id: string) {
    const destination = await this.destinationRepository.findOneBy({ id });

    await this.s3Client.send(
      new DeleteObjectCommand({
        Bucket: 'sunshine-air',
        Key: destination.image,
      }),
    );

    return this.destinationRepository.delete(id);
  }
}
