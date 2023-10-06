import { Test, TestingModule } from '@nestjs/testing';
import { MulterdbService } from './multerdb.service';

describe('MulterdbService', () => {
  let service: MulterdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MulterdbService],
    }).compile();

    service = module.get<MulterdbService>(MulterdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
