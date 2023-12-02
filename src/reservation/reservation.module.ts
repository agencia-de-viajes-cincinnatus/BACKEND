import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from 'src/typeorm/entities/Reservation';
import { Destination } from 'src/typeorm/entities/Destination';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, Destination])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
