import { Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
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
        };

        if (isDevelopment) {
          new Logger().log(`[Dev] Configured database`, 'Database');
          return { ...config, synchronize: true, dropSchema: true };
        } else if (isProduction) {
          new Logger().log(`[Production] Configured database`, 'Database');
          return { ...config };
        }

        throw new Error('NODE_ENV is required!');
        return {};
      },
    }),
  ],
})
export class DatabaseModule {

  
}
