// Replace your-framework with the framework you are using (e.g., react, vue3)
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEntityData, withEffects } from '@ngrx/data';
import { Preview, applicationConfig } from '@storybook/angular';
import { entityConfig } from '@webpackages/clients/ngrx';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideDefaultHttpCountQueryBuilder,
  provideDefaultHttpSearchQueryBuilder,
} from '@webpackages/material/core';
import { provideRouter } from '@angular/router';
import { withActions } from '@storybook/addon-actions/decorator';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^.*Event$' },
  },

  decorators: [
    withActions,
    applicationConfig({
      providers: [
        provideRouter([]),
        provideHttpClient(
          withInterceptors([
            (req, next) =>
              next(req.clone({ url: `http://localhost:3001/${req.url}` })),
          ])
        ),
        provideAnimations(),
        provideStore(),
        provideEffects(),
        provideEntityData(entityConfig, withEffects()),
        provideDefaultInputDebounceTime(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
        provideDefaultHttpCountQueryBuilder(),
        provideDefaultHttpSearchQueryBuilder(),
      ],
    }),
  ],
};

export default preview;
