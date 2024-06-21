import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { CommonNotificationModule } from '@webpackages/notification';

const modules = [
  ConfigModule.forRoot(),
  ThrottlerModule.forRoot(),
  EventEmitterModule.forRoot({ delimiter: '.' }),
  ScheduleModule.forRoot(),
  CommonNotificationModule,
];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class CommonAppModule {}
