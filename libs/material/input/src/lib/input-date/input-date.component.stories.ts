import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputDateComponent } from './input-date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { FormControl } from '@angular/forms';
import { INPUT_STORY_PROVIDERS } from '../__story';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'Date',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;

type Story = StoryObj<InputDateComponent>;

const inputControl = new FormControl('');

export const Primary: Story = {
  args: {
    inputControl,
    inputName: 'dob',
    inputLabel: 'Date of birth',
    inputHint: 'MM / DD / YYYY',
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Date of birth/gi)).toBeTruthy();
  },
};
