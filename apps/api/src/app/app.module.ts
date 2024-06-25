import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { entityList } from '@webpackages/entities';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'somedb',
      username: 'postgres',
      password: 'strong-password',
      entities: [...entityList],
      dropSchema: true,
      synchronize: true,
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
