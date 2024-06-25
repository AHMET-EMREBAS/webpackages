import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl } from '@angular/forms';
import { getBuiltinCategories } from '@webpackages/data';
import { INPUT_STORY_PROVIDERS } from '../__story';

const categoryOptions = getBuiltinCategories().map((e) => ({
  id: e.id,
  label: e.name,
}));
const meta: Meta<AutocompleteComponent> = {
  component: AutocompleteComponent,
  title: 'Autocomplete',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
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
    autocompleteOptions: categoryOptions,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Category/gi)).toBeTruthy();
  },
};
