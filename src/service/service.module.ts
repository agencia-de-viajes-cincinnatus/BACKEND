import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/typeorm/entities/Service';
import { Supplier } from 'src/typeorm/entities/Supplier';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Supplier])],
  controllers: [ServiceController],
  providers: [ServiceService],
})
export class ServiceModule {}
