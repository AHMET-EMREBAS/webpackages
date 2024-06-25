import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DevInterceptor } from './app-dev.interceptor';
import { provideDefaultTableOptions } from '@webpackages/material/core';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
  provideInputErrorMessageHandler,
} from '@webpackages/material/input';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideHttpClient(withInterceptors([DevInterceptor])),
    provideStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
    ...provideDefaultTableOptions(),
    provideDefaultInputErrorMesssageHandler(),
    provideDefaultInputStatusIndicatorHandler(),
    provideDefaultInputDebounceTime(),
  ],
};
