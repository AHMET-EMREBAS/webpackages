import { Controller, Sse } from '@nestjs/common';
import { CommonNotificationService } from './common-notification.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthNames } from '../auth';

@ApiBearerAuth(AuthNames.BEARER_AUTH)
@ApiTags(CommonNotificationController.name)
@Controller('common-notification')
export class CommonNotificationController {
  constructor(protected readonly service: CommonNotificationService) {}

  @Sse('common')
  notify() {
    return this.service.sub();
  }
}
