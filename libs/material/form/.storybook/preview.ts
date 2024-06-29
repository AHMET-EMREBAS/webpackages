// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview, applicationConfig } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  MockCategoryCollectionService,
  provideDefaultHttpSearchQueryBuilder,
  provideEntityCollectionService,
} from '@webpackages/material/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter } from '@angular/router';

import { setCompodocJson } from '@storybook/addon-docs/angular';

setCompodocJson(await import('./documentation.json'));

const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'zh', right: '🇨🇳', title: '中文' },
          { value: 'kr', right: '🇰🇷', title: '한국어' },
        ],
      },
    },
  },

  decorators: [
    withActions,
    applicationConfig({
      providers: [
        provideRouter([]),
        provideNativeDateAdapter(),
        provideAnimations(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
        provideEntityCollectionService(MockCategoryCollectionService),
        provideDefaultHttpSearchQueryBuilder(),
        provideDefaultInputDebounceTime(),
        provideHttpClient(
          withInterceptors([
            (req, next) => {
              return next(
                req.clone({
                  url: `http://localhost:3001/${req.url}`,
                })
              );
            },
          ])
        ),
        provideStore(),
        provideEffects(),
        provideEntityData(
          {
            pluralNames: {
              Product: 'Products',
              Category: 'Categories',
            },
            entityMetadata: {
              Category: {},
              Product: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};

export default preview;
