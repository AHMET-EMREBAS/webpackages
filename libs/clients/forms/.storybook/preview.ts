// Replace your-framework with the framework you are using (e.g., react, vue3)
import { provideHttpClient } from '@angular/common/http';
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

const preview: Preview = {
  parameters: {},
  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(),
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
