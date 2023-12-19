import { Module } from '@nestjs/common';
import { ReservationModule } from './reservation/reservation.module';
import { DestinationModule } from './destination/destination.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { SupplierModule } from './supplier/supplier.module';
import { CountryModule } from './country/country.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ReservationModule,
    DestinationModule,
    DatabaseModule,
    ClientModule,
    SupplierModule,
    CountryModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
