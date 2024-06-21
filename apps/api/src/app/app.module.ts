import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import { DatabaseModule } from '@webpackages/database';
import { ProductSubscriber } from '@webpackages/entities';

@Module({
  imports: [
    CommonAppModule,
    DatabaseModule.configure({
      subscribers: [ProductSubscriber],
    }),
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService],
})
export class AppModule {}
