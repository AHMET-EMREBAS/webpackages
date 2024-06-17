/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, NestModule, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { configureSwagger } from './swagger';
// import servefavicon from 'serve-favicon'
export type AppBootOptions = {
  port: number;
  prefix: string;
};

export async function boot(module: Type) {
  const app = await NestFactory.create(module);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  const port = 3000;

  configureSwagger(app);
  
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}
