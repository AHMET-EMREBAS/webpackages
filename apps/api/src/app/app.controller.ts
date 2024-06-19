import { Controller, Get, Post, Sse } from '@nestjs/common';
import { CommonNotificationService } from '@webpackages/core';

@Controller()
export class AppController {
  constructor(protected readonly notification: CommonNotificationService) {}

  @Post('hello')
  hello() {
    this.notification.pub('NEW_HELLO_MESSAGE');
    return { message: 'Published notification event.' };
  }
}
