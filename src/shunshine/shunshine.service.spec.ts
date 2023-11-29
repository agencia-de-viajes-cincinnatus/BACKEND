import { Test, TestingModule } from '@nestjs/testing';
import { ShunshineService } from './shunshine.service';

describe('ShunshineService', () => {
  let service: ShunshineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShunshineService],
    }).compile();

    service = module.get<ShunshineService>(ShunshineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
