import { Injectable } from '@nestjs/common';
import { CreateShunshineDto } from './dto/create-shunshine.dto';
import { UpdateShunshineDto } from './dto/update-shunshine.dto';

@Injectable()
export class ShunshineService {
  create(createShunshineDto: CreateShunshineDto) {
    return 'This action adds a new shunshine';
  }

  findAll() {
    return `This action returns all shunshine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shunshine`;
  }

  update(id: number, updateShunshineDto: UpdateShunshineDto) {
    return `This action updates a #${id} shunshine`;
  }

  remove(id: number) {
    return `This action removes a #${id} shunshine`;
  }
}
