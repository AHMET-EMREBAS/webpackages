import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';
import { CommonNotificationModule } from '@webpackages/core';
import { AppResourceModule } from './app-resource.module';

@Module({
  imports: [
    ThrottlerModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      extraProviders: [ConfigService],
      useFactory(c: ConfigService) {
        const database = c.getOrThrow('DATABASE');
        const username = c.getOrThrow('DATABASE_USERNAME');
        const password = c.getOrThrow('DATABASE_PASSWORD');

        const isDevelopment = c.getOrThrow('NODE_ENV') === 'development';
        const isProduction = c.getOrThrow('NODE_ENV') === 'production';

        const config = {
          type: 'postgres',
          username,
          password,
          database,
          autoLoadEntities: true,
        };

        if (isDevelopment) {
          return { ...config, synchronize: true, dropSchema: true };
        } else if (isProduction) {
          return { ...config };
        }

        throw new Error('NODE_ENV is required!');
        return {};
      },
    }),
    AppResourceModule,
    CommonNotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
