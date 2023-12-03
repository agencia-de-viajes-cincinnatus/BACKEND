import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { DestinationModule } from './destination/destination.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ReservationModule,
    DestinationModule,
    DatabaseModule,
    ClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
