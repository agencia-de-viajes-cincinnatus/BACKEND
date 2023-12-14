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
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { of } from 'rxjs';
import * as fs from 'fs';

const storage = {
  storage: diskStorage({
    destination: './uploads/destinationImages',
    filename: (req, file, cb) => {
      cb(null, `${req.params.id}${extname(file.originalname)}`);
    },
  }),
};

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
  findImage(@Param('imageName') imageName: string, @Res() res) {
    return of(
      res.sendFile(
        join(process.cwd(), 'uploads/destinationImages/' + imageName),
      ),
    );
  }

  @Post()
  createDestination(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationService.createDestination(createDestinationDto);
  }

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', storage))
  uploadFile(@Param('id', ParseUUIDPipe) id: string, @UploadedFile() file) {
    if (file.size !== 0) {
      return this.destinationService.uploadFile(id, file.filename);
    }

    fs.unlink(`./uploads/destinationImages/${file.filename}`, (err) => {
      if (err) {
        console.error(err);
      }
      console.log('File deleted successfully');
    });

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
