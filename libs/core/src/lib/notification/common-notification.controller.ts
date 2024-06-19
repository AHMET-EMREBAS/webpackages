import { Controller, Sse } from '@nestjs/common';
import { CommonNotificationService } from './common-notification.service';

@Controller('common-notification')
export class CommonNotificationController {
  constructor(protected readonly service: CommonNotificationService) {}

  @Sse('common')
  notify() {
    return this.service.sub();
  }
}
