// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview, applicationConfig } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';
import { within } from '@storybook/testing-library';
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
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideEntityData,
  EntityMetadataMap,
  EntityDataModuleConfig,
  withEffects,
} from '@ngrx/data';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter } from '@angular/router';
import { PropertyOptions } from '@webpackages/types';
const preview: Preview = {
  decorators: [
    withActions,
    applicationConfig({
      providers: [
        provideRouter([]),
        provideNativeDateAdapter(),
        provideAnimations(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
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
              Category: 'Category',
            },
            entityMetadata: {
              Category: {},
              Product: {},
            },
          },
          withEffects()
        ),
        provideEntityCollectionService(MockCategoryCollectionService),
        provideDefaultHttpSearchQueryBuilder(),
      ],
    }),
  ],
};

export default preview;
