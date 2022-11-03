import { Test, TestingModule } from '@nestjs/testing';
import { HomeinfoService } from './homeinfo.service';

describe('HomeinfoService', () => {
  let service: HomeinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeinfoService],
    }).compile();

    service = module.get<HomeinfoService>(HomeinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
