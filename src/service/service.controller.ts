import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/CreateService.dto';
import { UpdateServiceDto } from './dto/UpdateService.dto';

@Controller('api/service')
export class ServiceController {
  constructor(private serviceService: ServiceService) {}

  @Get()
  async getService() {
    return this.serviceService.findService();
  }

  @Get(':id')
  async getServiceById(@Param('id', ParseUUIDPipe) id: string) {
    return this.serviceService.findServiceById(id);
  }

  @Post(':id')
  createService(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() createReservationDto: CreateServiceDto,
  ) {
    return this.serviceService.createService(id, createReservationDto);
  }

  @Patch(':id')
  async updateServiceById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    await this.serviceService.updateService(id, updateServiceDto);
  }

  @Delete(':id')
  async deleteServiceById(@Param('id', ParseUUIDPipe) id: string) {
    await this.serviceService.deleteService(id);
  }
}
