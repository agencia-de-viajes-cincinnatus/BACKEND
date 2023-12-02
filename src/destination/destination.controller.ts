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
import { DestinationService } from './destination.service';
import { UpdateDestinationDto } from './dtos/UpdateDestination.dto';
import { CreateDestinationDto } from './dtos/CreateDestination.dto';

@Controller('api/destination')
export class DestinationController {
  constructor(private destinationService: DestinationService) {}
  @Get()
  async getDestinations() {
    return this.destinationService.findDestinations();
  }

  @Get(':id')
  async getDestinationById(@Param('id', ParseUUIDPipe) id: string) {
    return this.destinationService.findDestinationById(id);
  }

  @Post()
  createDestination(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationService.createDestination(createDestinationDto);
  }

  @Patch(':id')
  async updateDestinationById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ) {
    await this.destinationService.updateDestination(id, updateDestinationDto);
  }

  @Delete(':id')
  async deleteReservationById(@Param('id', ParseUUIDPipe) id: string) {
    await this.destinationService.deleteDestination(id);
  }
}
