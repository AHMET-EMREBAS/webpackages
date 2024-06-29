// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';

import { setCompodocJson } from '@storybook/addon-docs/angular';

setCompodocJson(await import('./documentation.json'));

const preview: Preview = {
  parameters: {},

  decorators: [withActions],
};

export default preview;
