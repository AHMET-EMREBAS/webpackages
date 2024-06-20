import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { CommonNotificationService } from '@webpackages/core';

@ApiTags(AppController.name)
@Controller()
export class AppController {
  // constructor(protected readonly notification: CommonNotificationService) {}

  
  @Post('hello')
  hello() {
    // this.notification.pub('NEW_HELLO_MESSAGE');
    return { message: 'Published notification event.' };
  }
}
