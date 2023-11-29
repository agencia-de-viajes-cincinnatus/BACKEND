import { Module } from '@nestjs/common';
import { ShunshineModule } from './shunshine/shunshine.module';

@Module({
  imports: [ShunshineModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
