import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { DatabaseModule } from '../database';
import { CommonNotificationModule } from '../notification';

const modules = [
  ThrottlerModule.forRoot(),
  EventEmitterModule.forRoot({ delimiter: '.' }),
  ConfigModule.forRoot(),
  ScheduleModule.forRoot(),
  DatabaseModule,
  CommonNotificationModule,
];
@Module({
  imports: [...modules],
  exports: [...modules],
})
export class CommonAppModule {}
