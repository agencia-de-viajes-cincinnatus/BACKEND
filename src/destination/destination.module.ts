import { Module } from '@nestjs/common';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destination } from 'src/typeorm/entities/Destination';

@Module({
  imports: [TypeOrmModule.forFeature([Destination])],
  controllers: [DestinationController],
  providers: [DestinationService],
})
export class DestinationModule {}
