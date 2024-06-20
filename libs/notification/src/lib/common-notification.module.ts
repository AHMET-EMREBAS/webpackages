import { Module } from '@nestjs/common';
import { CommonNotificationService } from './common-notification.service';
import { CommonNotificationController } from "./common-notification.controller";

@Module({
  controllers: [CommonNotificationController],
  providers: [CommonNotificationService],
  exports:[CommonNotificationService]
})
export class CommonNotificationModule {}
