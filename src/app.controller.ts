import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TransformInterceptor } from './interceptors/transform/transform.interceptor';
import { ResponseMessage } from './decorators/response/response.decorator';

@UseInterceptors(TransformInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ResponseMessage('Success!')
  getHello(): string {
    return this.appService.getHello();
  }
}
