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
import { getBuiltinCategories } from '@webpackages/data';

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

const selectOptions = getBuiltinCategories().map((e) => ({
  id: e.id,
  label: e.name,
}));
const enumOptions = getBuiltinCategories().map((e) => e.name);

export const Primary: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    selectOptions: selectOptions,
  },
};

export const MultipleObjectSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl(1, []),
    selectOptions: selectOptions,
    inputMultiple: true,
  },
};

export const EnumSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    enumOptions: enumOptions,
  },
};

export const MultipleEnumSelect: Story = {
  args: {
    inputName: 'category',
    inputLabel: 'Select Item',
    inputControl: new FormControl('', []),
    inputMultiple: true,
    enumOptions: enumOptions,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Select Item/gi)).toBeTruthy();
  },
};
