import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import { subscriberList } from '@webpackages/entities';
import { DatabaseModule } from '@webpackages/database';
import { AuthModule, provideGlobalAuthGuard } from '@webpackages/auth';
import { AppSeedModule } from './app-seed.module';

@Module({
  imports: [
    CommonAppModule,
    AuthModule,
    DatabaseModule.configure({
      subscribers: [...subscriberList],
    }),
    AppSeedModule,
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService, provideGlobalAuthGuard()],
})
export class AppModule {}

@Module({
  imports: [
    CommonAppModule,
    DatabaseModule.configure({
      subscribers: [...subscriberList],
    }),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
})
export class PublicAppModule {}
