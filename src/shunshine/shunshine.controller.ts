import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShunshineService } from './shunshine.service';
import { CreateShunshineDto } from './dto/create-shunshine.dto';
import { UpdateShunshineDto } from './dto/update-shunshine.dto';

@Controller('shunshine')
export class ShunshineController {
  constructor(private readonly shunshineService: ShunshineService) {}

  @Post()
  create(@Body() createShunshineDto: CreateShunshineDto) {
    return this.shunshineService.create(createShunshineDto);
  }

  @Get()
  findAll() {
    return this.shunshineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shunshineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShunshineDto: UpdateShunshineDto,
  ) {
    return this.shunshineService.update(+id, updateShunshineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shunshineService.remove(+id);
  }
}
