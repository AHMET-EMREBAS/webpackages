import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/core';
import { AppResourceModule } from './app-resource.module';
import { AuthGuard, AuthModule } from '@webpackages/auth';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [CommonAppModule, AppResourceModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
