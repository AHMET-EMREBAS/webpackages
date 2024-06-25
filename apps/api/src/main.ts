import { Module } from '@nestjs/common';

import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import * as Subscribers from '@webpackages/entities';
import { DatabaseModule } from '@webpackages/database';
import { AuthModule, provideGlobalAuthGuard } from '@webpackages/auth';
import { AppService } from './app/app.service';

@Module({
  imports: [
    CommonAppModule,
    AuthModule,
    DatabaseModule.configure({
      subscribers: [
        ...Object.values(Subscribers).filter((e) =>
          e.name.endsWith('Susbscriber')
        ),
      ],
    }),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService, provideGlobalAuthGuard()],
})
export class AppModule {}

@Module({
  imports: [
    CommonAppModule,
    DatabaseModule.configure({
      subscribers: [
        ...Object.values(Subscribers).filter((e) =>
          e.name.endsWith('Susbscriber')
        ),
      ],
    }),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
})
export class PublicAppModule {}
