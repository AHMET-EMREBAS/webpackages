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
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const Primary: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    selectOptions: getBuiltinCategories(),
  },
};

export const MultipleObjectSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    selectOptions: getBuiltinCategories(),
    inputMultiple: true,
  },
};

export const EnumSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    enumOptions: getBuiltinCategories().map((e) => e.label),
  },
};

export const MultipleEnumSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    inputMultiple: true,
    enumOptions: getBuiltinCategories().map((e) => e.label),
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select Item/gi)).toBeTruthy();
  },
};
