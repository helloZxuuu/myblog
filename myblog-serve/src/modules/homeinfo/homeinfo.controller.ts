import { Controller, Get } from '@nestjs/common';
import { HomeinfoService } from './homeinfo.service';

@Controller('homeinfo')
export class HomeinfoController {
  constructor(private readonly homeinfoService: HomeinfoService) {}

  @Get("/")
  getHomeInfo() {
    return 'hello world'
  }

}
