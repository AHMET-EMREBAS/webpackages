/**
 *
 * -
 *
 *
 */

import { INestApplication, Logger, NestModule, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { readFileSync } from 'fs';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class AppConfig {
  port = '3000';
  host = 'localhost';
  apiPrefix = 'api';
  appID = '1234';
  appName = 'App Name';
  appDescription = 'App Description';
  author = 'App Author';
  contactEmail = 'contact@email.com';
  website = 'https://website.com';
  organizationHeader = 'x-organization';
  scopeHeader = 'x-scope';
  deviceIdHeader = 'x-deviceid';
  license = 'license';
  version = 'version';
  rootUserName = 'root';
  rootPassword = 'password';

  static readonly PORT = 'PORT';
  static readonly HOST = 'HOST';
  static readonly API_PREFIX = 'API_PREFIX';
  static readonly APP_ID = 'APP_ID';
  static readonly APP_NAME = 'APP_NAME';
  static readonly APP_DESCRIPTION = 'APP_DESCRIPTION';
  static readonly AUTHOR = 'AUTHOR';
  static readonly CONTACT_EMAIL = 'CONTACT_EMAIL';
  static readonly WEBSITE = 'WEBSITE';
  static readonly ORGANIZATION_HEADER = 'ORGANIZATION_HEADER';
  static readonly SCOPE_HEADER = 'SCOPE_HEADER';
  static readonly DEVICE_ID_HEADER = 'DEVICE_ID_HEADER';
  static readonly LICENSE = 'LICENSE';
  static readonly VERSION = 'VERSION';
  static readonly ROOT_USERNAME = 'ROOT_USERNAME';
  static readonly ROOT_PASSWORD = 'ROOT_PASSWORD';
}

export class AppConfigLoader {
  /**
   * Configuration filename/profile, default is config
   * @param profile
   */
  constructor(protected readonly profile = 'app-config') {}

  load(from: 'file' | 'env') {
    if (from === 'file') {
      return this.loadFromFile();
    } else {
      return this.loadFromEnv();
    }
  }

  /**
   * Get environment variable
   */
  protected env(key: string) {
    const env = process.env;
    const result = env[key];

    if (result) return result;

    throw new Error(`Configuration ${key} is not found!`);
  }

  protected loadFromFile(): AppConfig {
    const configContent = readFileSync(
      join(__dirname, `${this.profile}.json`)
    ).toString();

    const configObject = JSON.parse(configContent) as AppConfig;
    return configObject;
  }

  protected loadFromEnv(): AppConfig {
    return {
      port: this.env(AppConfig.PORT),
      host: this.env(AppConfig.HOST),
      apiPrefix: this.env(AppConfig.API_PREFIX),
      appID: this.env(AppConfig.APP_ID),
      appName: this.env(AppConfig.APP_NAME),
      appDescription: this.env(AppConfig.APP_DESCRIPTION),
      author: this.env(AppConfig.AUTHOR),
      contactEmail: this.env(AppConfig.CONTACT_EMAIL),
      website: this.env(AppConfig.WEBSITE),
      organizationHeader: this.env(AppConfig.ORGANIZATION_HEADER),
      scopeHeader: this.env(AppConfig.SCOPE_HEADER),
      deviceIdHeader: this.env(AppConfig.DEVICE_ID_HEADER),
      license: this.env(AppConfig.LICENSE),
      version: this.env(AppConfig.VERSION),
      rootUserName: this.env(AppConfig.ROOT_USERNAME),
      rootPassword: this.env(AppConfig.ROOT_PASSWORD),
    };
  }
}

export async function boot(app: INestApplication, appConfig: AppConfig) {
  const {
    apiPrefix,
    appDescription,
    appName,
    author,
    contactEmail,
    deviceIdHeader,
    host,
    organizationHeader,
    port,
    scopeHeader,
    website,
    version,
    license,
  } = appConfig;

  app.setGlobalPrefix(apiPrefix);

  const config = new DocumentBuilder()

    .setTitle(appName)
    .setDescription(appDescription)
    .setVersion(version)
    .setContact(author, website, contactEmail)
    .setLicense('CL', license)
    .addTag(appName)
    .addGlobalParameters({ in: 'header', name: 'autorization' })
    .addGlobalParameters({ in: 'header', name: deviceIdHeader })
    .addGlobalParameters({ in: 'header', name: organizationHeader })
    .addGlobalParameters({ in: 'header', name: scopeHeader })
    .build();

  app.use(helmet());
  app.enableCors({ origin: '*' });
  

  const doc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(apiPrefix + '-doc', app, doc);

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${apiPrefix}`
  );
}
