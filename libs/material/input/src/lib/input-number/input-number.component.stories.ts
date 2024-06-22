import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputNumberComponent } from './input-number.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '../input';
import { FormControl, Validators } from '@angular/forms';

const meta: Meta<InputNumberComponent> = {
  component: InputNumberComponent,
  title: 'Number',
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
type Story = StoryObj<InputNumberComponent>;

export const Primary: Story = {
  args: {
    inputLabel: 'Input Label',
    inputName: 'age',
    inputControl: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(200),
    ]),
    inputHint: `Age should be between 18 and 200.`,
    inputMin: 18,
    inputMax: 200,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Input Label/gi)).toBeTruthy();
  },
};
