/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { boot } from '@webpackages/boot-nest';
import { AppModule, PublicAppModule } from './app/app.module';

boot(AppModule, PublicAppModule);
