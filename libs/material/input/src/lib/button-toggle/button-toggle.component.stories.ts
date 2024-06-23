import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl, Validators } from '@angular/forms';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggle',
  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;

type Story = StoryObj<ButtonToggleComponent>;

const inputControl = new FormControl('', [
  Validators.required,
  Validators.minLength(1),
  Validators.maxLength(2),
]);

export const Primary: Story = {
  args: {
    inputControl,
    inputName: 'difficulty',
    inputEnums: ['Easy', 'Medium', 'Hard'],
  },
};

export const Multiple: Story = {
  args: {
    inputControl,
    inputName: 'difficulty',
    inputEnums: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    inputMultiple: true,
    inputMinLength: 2,
    inputMaxLength: 3,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Easy/gi)).toBeTruthy();
  },
};
