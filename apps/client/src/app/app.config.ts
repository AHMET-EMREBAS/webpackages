import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppDevInterceptor } from './app-dev.interceptor';
import {
  provideDefaultErrorStateMatcher,
  provideDefaultTableOptions,
} from '@webpackages/material/core';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { entityConfig } from '@webpackages/clients/ngrx';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withHashLocation()),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    provideHttpClient(withInterceptors([AppDevInterceptor])),
    provideStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
    provideDefaultInputErrorMesssageHandler(),
    provideDefaultInputStatusIndicatorHandler(),
    provideDefaultInputDebounceTime(),
    provideDefaultErrorStateMatcher(),
    ...provideDefaultTableOptions(),
  ],
};
