import { Logger, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalValidationPipe } from './global-pipe';
import { ConfigService } from '@nestjs/config';
import { AuthNames, AuthHeaders } from '@webpackages/types';

export async function boot(AppModule: Type) {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const C = app.get(ConfigService);
  const PORT = C.getOrThrow('PORT');
  const APP_NAME = C.getOrThrow('APP_NAME');
  const APP_DESCRIPTION = C.getOrThrow('APP_DESCRIPTION');

  const documentBuilder = new DocumentBuilder()
    .setTitle(APP_NAME)
    .setDescription(APP_DESCRIPTION)
    .addBearerAuth({ type: 'http', name: AuthNames.BEARER_AUTH, in: 'header' })
    .addBasicAuth({ type: 'http', name: AuthNames.LOCAL_AUTH, in: 'body' })
    .addGlobalParameters({ in: 'header', name: AuthHeaders.X_ORGNAME })
    .addGlobalParameters({ in: 'header', name: AuthHeaders.X_DEVICE_ID })
    .addGlobalParameters({ in: 'header', name: AuthHeaders.X_SCOPE });

  app.enableCors({ origin: '*' });

  app.useGlobalPipes(GlobalValidationPipe);

  const doc = SwaggerModule.createDocument(app, documentBuilder.build());

  SwaggerModule.setup('api', app, doc);

  await app.listen(PORT);

  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/api`);
}
