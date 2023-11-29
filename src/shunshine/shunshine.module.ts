import { Module } from '@nestjs/common';
import { ShunshineService } from './shunshine.service';
import { ShunshineController } from './shunshine.controller';

@Module({
  controllers: [ShunshineController],
  providers: [ShunshineService],
})
export class ShunshineModule {}
