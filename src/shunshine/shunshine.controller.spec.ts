import { Test, TestingModule } from '@nestjs/testing';
import { ShunshineController } from './shunshine.controller';
import { ShunshineService } from './shunshine.service';

describe('ShunshineController', () => {
  let controller: ShunshineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShunshineController],
      providers: [ShunshineService],
    }).compile();

    controller = module.get<ShunshineController>(ShunshineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
