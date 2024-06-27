import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { CommonNotificationModule } from '@webpackages/notification';
import { AuthModule } from '@webpackages/auth';
import { DatabaseModule } from '@webpackages/database';
import { subscriberList } from '@webpackages/entities';

const modules = [
  ConfigModule.forRoot(),
  ThrottlerModule.forRoot(),
  EventEmitterModule.forRoot({ delimiter: '.' }),
  ScheduleModule.forRoot(),
  CommonNotificationModule,
  DatabaseModule.configure({ subscribers: [...subscriberList] }),
  AuthModule,
];

@Module({
  imports: [...modules],
  exports: [...modules],
})
export class CommonAppModule {}
