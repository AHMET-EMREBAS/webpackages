import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideDefaultAutocompleteOptions,
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '../input';
import { provideNativeDateAdapter } from '@angular/material/core';

export const INPUT_STORY_PROVIDERS = [
  provideAnimations(),
  provideNativeDateAdapter(),
  provideDefaultInputErrorMesssageHandler(),
  provideDefaultInputStatusIndicatorHandler(),
  provideDefaultInputDebounceTime(),
  provideDefaultAutocompleteOptions(),
];
