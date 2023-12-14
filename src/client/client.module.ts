import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/typeorm/entities/Client';
import { CountryModule } from 'src/country/country.module';
import { CountryService } from 'src/country/country.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client]), CountryModule],
  controllers: [ClientController],
  providers: [ClientService, CountryService],
})
export class ClientModule { }
