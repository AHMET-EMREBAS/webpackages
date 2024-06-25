import { Logger, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonAppModule } from '@webpackages/boot-nest';
import * as RestModules from '@webpackages/controllers';
import { AuthModule } from '@webpackages/auth';
import { AppSeedModule } from './app-seed.module';
import { subscriberList } from '@webpackages/entities';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [
    CommonAppModule,
    AuthModule,

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      extraProviders: [ConfigService],
      useFactory(c: ConfigService) {
        const database = c.getOrThrow('DATABASE');
        const username = c.getOrThrow('DATABASE_USERNAME');
        const password = c.getOrThrow('DATABASE_PASSWORD');
        const isDevelopment = c.getOrThrow('NODE_ENV') === 'development';
        const isProduction = c.getOrThrow('NODE_ENV') === 'production';

        console.table({
          database,
          username,
          password,
          isDevelopment,
          isProduction,
        });

        const config = {
          type: 'postgres',
          username,
          password,
          database,
          autoLoadEntities: true,
        } as TypeOrmModuleOptions;

        if (isDevelopment) {
          new Logger().log(`[Dev] Configured database`, 'Database');
          return { ...config, synchronize: true, dropSchema: true };
        } else if (isProduction) {
          new Logger().log(`[Production] Configured database`, 'Database');
          return { ...config, synchronize: true, dropSchema: true };
        }

        throw new Error('NODE_ENV is required!');
      },
    }),

    AppSeedModule,
    ...Object.values(RestModules).filter((e) => e.name.endsWith('Module')),
  ],
  providers: [AppService],
})
export class AppModule {}
// DatabaseModule.configure({
//   subscribers: [...subscriberList],
//   entities: [...entityList],
// }),
