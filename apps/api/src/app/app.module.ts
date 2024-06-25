import { Module } from '@nestjs/common';
import * as ControllerModules from '@webpackages/controllers';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@webpackages/database';
import { subscriberList, entityList } from '@webpackages/entities';
@Module({
  imports: [
    ConfigModule,
    ...Object.values(ControllerModules).filter((e) =>
      e.name.endsWith('Module')
    ),
    DatabaseModule.configure({
      subscribers: [...subscriberList],
      entities: [...entityList],
    }),
  ],
})
export class AppModule {}
