import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTextComponent } from './input-text.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, Validators } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '../input';

const meta: Meta<InputTextComponent> = {
  component: InputTextComponent,
  title: 'Text',
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
type Story = StoryObj<InputTextComponent>;

export const Primary: Story = {
  args: {
    inputLabel: 'Input Label',
    inputName: 'name',
    inputRequired: true,
    inputControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]),
    inputHint: `Name should be between 3 and 30 characters.`,
    inputMinLength: 3,
    inputMaxLength: 30,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Input Label/gi)).toBeTruthy();
  },
};
