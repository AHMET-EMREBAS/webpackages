/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { AppConfigLoader, boot } from '@webpackages/core';
import { AppModule } from './app/app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const appConfig = new AppConfigLoader().load('env');
  const app = await NestFactory.create(AppModule);
  await boot(app, appConfig);
}

bootstrap();
