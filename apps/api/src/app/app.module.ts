import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {} from '@webpackages/resources';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'devdb',
      username: 'postgres',
      password: 'strong-password',
      autoLoadEntities: true,
      dropSchema: true,
      synchronize: true,
    }),
    SkuModule,
  ],
  providers: [AppService],
})
export class AppModule {}
