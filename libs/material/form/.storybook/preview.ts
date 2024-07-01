// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview, applicationConfig } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';

import { setCompodocJson } from '@storybook/addon-docs/angular';
import {
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';

setCompodocJson(await import('./documentation.json'));

const preview: Preview = {
  parameters: {},
  decorators: [
    withActions,
    applicationConfig({
      providers: [
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
      ],
    }),
  ],
};

export default preview;
