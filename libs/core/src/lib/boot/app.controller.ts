import { Controller, Get } from '@nestjs/common';

@Controller('app-config')
export class AppController {
    
  @Get()
  config() {

    return 
  }
}
