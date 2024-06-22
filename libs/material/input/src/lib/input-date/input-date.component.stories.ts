import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputDateComponent } from './input-date.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, Validators } from '@angular/forms';
import {
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '../input/input.provider';

const meta: Meta<InputDateComponent> = {
  component: InputDateComponent,
  title: 'Date',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideNativeDateAdapter(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<InputDateComponent>;

const inputControl = new FormControl('', [
  Validators.min(new Date().getTime()),
]);

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
