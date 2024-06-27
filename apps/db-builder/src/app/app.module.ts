import { Module } from '@nestjs/common';
import { entityList, subscriberList, viewList } from '@webpackages/entities';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'bms',
      username: 'postgres',
      password: 'strong-password',
      entities: [...entityList, ...viewList],
      subscribers: [...subscriberList],
      synchronize: true,
      dropSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
