import { Module } from '@nestjs/common';
import { ShunshineModule } from './shunshine/shunshine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './typeorm/entities/Reservation';
import { ReservationModule } from './reservation/reservation.module';
import { Destination } from './typeorm/entities/Destination';

@Module({
  imports: [
    ShunshineModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'cinncinatus',
      database: 'sunshine',
      entities: [Reservation, Destination],
      synchronize: true,
    }),
    ReservationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
