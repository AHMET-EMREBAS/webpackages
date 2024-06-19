import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './inventory';
import { CrmModule } from './crm';
import { ProjectModule } from '@webpackages/resources/project';
import { EmsModule } from './ems';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot(),
    EventEmitterModule.forRoot({ delimiter: '.' }),
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'password',
      database: 'testdb',
      // type:'better-sqlite3',
      // database:'./tmp/database.sqlite',
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
    }),
    InventoryModule,
    CrmModule,
    ProjectModule,
    EmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
