import { Module } from '@nestjs/common';
import { ServiceReservationService } from './service-reservation.service';

@Module({
  providers: [ServiceReservationService],
  exports: [ServiceReservationService],
})
export class AppModule {}
