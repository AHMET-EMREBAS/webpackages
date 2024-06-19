import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/core';
import { AppResourceModule } from './app-resource.module';

@Module({
  imports: [CommonAppModule, AppResourceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
