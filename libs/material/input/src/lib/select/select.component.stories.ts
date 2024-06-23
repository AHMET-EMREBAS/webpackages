import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SelectComponent } from './select.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl } from '@angular/forms';
import { getBuiltinCategories } from '@webpackages/types';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'SelectComponent',
  decorators: [
    applicationConfig({
      providers: [INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    selectOptions: getBuiltinCategories()
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select Item/gi)).toBeTruthy();
  },
};
