// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';
const preview: Preview = {
  decorators: [withActions],
};

export default preview;
