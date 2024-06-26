import { bootstrapApplication } from '@angular/platform-browser';

import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideServiceWorker } from '@angular/service-worker';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideDefaultTableOptions } from '@webpackages/material/core';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { entityConfig } from '@webpackages/clients/ngrx';
import { HttpInterceptorFn } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({ standalone: true, selector: 'app-root', template: '' })
export class AppComponent {}

export const AppDevInterceptor: HttpInterceptorFn = (req, next) => {
  if (isDevMode()) {
    return next(req.clone({ url: `http://localhost:3001/${req.url}` }));
  }
  return next(req);
};

export const appConfig: ApplicationConfig = {
  providers: [
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
    ...provideDefaultTableOptions(),
  ],
};

describe('Api Smoke Test With NgRX Client', () => {
  beforeAll(() => {
    bootstrapApplication(AppComponent, appConfig).catch((err) =>
      console.error(err)
    );
  });
});
