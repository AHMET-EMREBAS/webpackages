import { DynamicModule, Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Constructor } from '@webpackages/types';

export type DatabaseModuleOptions = {
  subscribers: Constructor[];
};

@Module({})
export class DatabaseModule {
  static configure(options: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          extraProviders: [ConfigService],
          useFactory(c: ConfigService) {
            const database = c.getOrThrow('DATABASE');
            const username = c.getOrThrow('DATABASE_USERNAME');
            const password = c.getOrThrow('DATABASE_PASSWORD');
            const isDevelopment = c.getOrThrow('NODE_ENV') === 'development';
            const isProduction = c.getOrThrow('NODE_ENV') === 'production';

            const config = {
              type: 'postgres',
              username,
              password,
              database,
              autoLoadEntities: true,
              subscribers: [...options.subscribers],
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
      ],
    };
  }
}
