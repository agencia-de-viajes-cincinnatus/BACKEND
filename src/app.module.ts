import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { DestinationModule } from './destination/destination.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ReservationModule,
    DestinationModule,
    DatabaseModule,
    ClientModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
