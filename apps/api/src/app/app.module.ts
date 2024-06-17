import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleModule } from './sample/sample.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    SampleModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: './tmp/app.sqlite',
      synchronize: true,
      dropSchema: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
