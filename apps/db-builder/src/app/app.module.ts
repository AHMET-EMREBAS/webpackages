import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { entityList } from '@webpackages/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

console.log(entityList);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'devdb',
      username: 'devuser',
      password: 'devuser',

      entities: [...entityList],

      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
