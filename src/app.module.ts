import { Module } from '@nestjs/common';
import { ShunshineModule } from './shunshine/shunshine.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './typeorm/entities/Reservation';

@Module({
  imports: [
    ShunshineModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'cinncinatus',
      database: 'sunshine',
      entities: [Reservation],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
