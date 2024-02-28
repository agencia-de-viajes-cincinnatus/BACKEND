import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { DestinationService } from './destination.service';
import { UpdateDestinationDto } from './dtos/UpdateDestination.dto';
import { CreateDestinationDto } from './dtos/CreateDestination.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

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

  @Get('image/:imageName')
  async findImage(@Param('imageName') imageName: string, @Res() res) {
    const url = await this.destinationService.getImage(imageName);
    res.send({ url });
  }

  @Post()
  createDestination(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationService.createDestination(createDestinationDto);
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Param('id', ParseUUIDPipe) id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (file.size !== 0) {
      const fileName = `${id}${extname(file.originalname)}`;
      return this.destinationService.uploadFile(
        id,
        fileName,
        file.buffer,
        file.mimetype,
      );
    }
    return {
      message: 'No file provided',
    };
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
