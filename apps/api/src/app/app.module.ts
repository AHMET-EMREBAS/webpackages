import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryModule } from './inventory';
import { CrmModule } from './crm';
import { ProjectModule } from '@webpackages/resources/project';
import { EmsModule } from './ems';

@Module({
  imports: [
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


