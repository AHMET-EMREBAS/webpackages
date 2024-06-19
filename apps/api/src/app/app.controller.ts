import { Controller, Sse } from '@nestjs/common';

@Controller()
export class AppController {
  @Sse('clock')
  alive() {
    return new Date().getTime();
  }
}
