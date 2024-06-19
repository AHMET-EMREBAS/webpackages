import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard, AuthModule } from '@webpackages/auth';
import { CommonAppModule } from '@webpackages/core';
import { UserModule } from '@webpackages/resources';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [CommonAppModule, UserModule, AuthModule],
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
