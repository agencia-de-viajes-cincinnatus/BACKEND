import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/destination')
export class DestinationController {
  @Get()
  getDestination() {}

  @Post()
  createDestination() {}
}
