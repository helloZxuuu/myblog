import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Record<string, any> {
    const result = {
      code: 200,
      msg: '请求成功',
      data: this.appService.getHello()
    }
    return result
  }

  @Get('getHomeBlogList')
  getHomeBlogList(): any {
    const result = {
      code: 200,
      msg: '请求成功',
      data: this.appService.getHomeBlogList()
    }
    return result
  }
}
