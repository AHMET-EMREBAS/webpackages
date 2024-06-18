import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '@webpackages/resources/category';
@Module({
  imports: [
    CategoryModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: './tmp/app.sqlite',
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
