import { Module } from '@nestjs/common';
import * as ControllerModules from '@webpackages/controllers';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@webpackages/database';
import { subscriberList, entitiesList } from '@webpackages/entities';
@Module({
  imports: [
    ConfigModule,
    ...Object.values(ControllerModules).filter((e) =>
      e.name.endsWith('Module')
    ),

    DatabaseModule.configure({
      subscribers: [...subscriberList],
      entities: [...entitiesList],
    }),
  ],
})
export class AppModule {}
