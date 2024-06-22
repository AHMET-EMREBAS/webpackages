import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InputTextareaComponent } from './input-textarea.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, Validators } from '@angular/forms';
import { INPUT_STORY_PROVIDERS } from '../__story';

const meta: Meta<InputTextareaComponent> = {
  component: InputTextareaComponent,
  title: 'Textarea',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;
type Story = StoryObj<InputTextareaComponent>;

export const Primary: Story = {
  args: {
    inputLabel: 'Input Label',
    inputName: 'description',
    inputControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(1000),
    ]),
    inputHint: `Description should be between 3 and 1000 characters long.`,
    inputMinLength: 3,
    inputMaxLength: 1000,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Input Label!/gi)).toBeTruthy();
  },
};
