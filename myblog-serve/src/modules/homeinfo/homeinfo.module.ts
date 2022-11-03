import { Module } from '@nestjs/common';
import { HomeinfoService } from './homeinfo.service';
import { HomeinfoController } from './homeinfo.controller';

@Module({
  controllers: [HomeinfoController],
  providers: [HomeinfoService]
})
export class HomeinfoModule {}
