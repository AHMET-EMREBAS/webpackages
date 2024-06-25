import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import { DatabaseModule } from '@webpackages/database';
import { AuthModule, provideGlobalAuthGuard } from '@webpackages/auth';
import { AppSeedModule } from './app-seed.module';
import { entityList, subscriberList } from '@webpackages/entities';
@Module({
  imports: [
    CommonAppModule,
    AuthModule,
    DatabaseModule.configure({
      subscribers: [...subscriberList],
      entities: [...entityList],
    }),
    AppSeedModule,
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService],
})
export class AppModule {}
