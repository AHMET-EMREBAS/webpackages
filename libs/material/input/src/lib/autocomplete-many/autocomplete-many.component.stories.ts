import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AutocompleteManyComponent } from './autocomplete-many.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl } from '@angular/forms';
import { getBuiltinCategories } from '@webpackages/data';

const categoryOptions = getBuiltinCategories().map((e) => ({
  id: e.id,
  label: e.name,
}));

const meta: Meta<AutocompleteManyComponent> = {
  component: AutocompleteManyComponent,
  title: 'AutocompleteMany',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;
type Story = StoryObj<AutocompleteManyComponent>;

export const Primary: Story = {
  args: {
    inputControl: new FormControl([]),
    inputName: 'categories',
    inputLabel: 'Categories',
    autocompleteOptions: categoryOptions,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Categories/gi)).toBeTruthy();
  },
};
