import { Test, TestingModule } from '@nestjs/testing';
import { HomeinfoController } from './homeinfo.controller';
import { HomeinfoService } from './homeinfo.service';

describe('HomeinfoController', () => {
  let controller: HomeinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeinfoController],
      providers: [HomeinfoService],
    }).compile();

    controller = module.get<HomeinfoController>(HomeinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
