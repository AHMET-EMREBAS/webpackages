import { boot } from '@webpackages/boot-nest';
import { AppModule, PublicAppModule } from './app/app.module';

boot(AppModule, PublicAppModule);
