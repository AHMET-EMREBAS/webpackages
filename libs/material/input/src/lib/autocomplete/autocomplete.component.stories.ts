import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '../input';
import { FormControl } from '@angular/forms';
import { CategoriesData } from '@webpackages/types';

const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'Autocomplete',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<AutocompleteComponent>;

export const Primary: Story = {
  args: {
    inputControl: new FormControl(''),
    inputName: 'category',
    inputLabel: 'Category',
    autocompleteOptions: CategoriesData,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Category/gi)).toBeTruthy();
  },
};
