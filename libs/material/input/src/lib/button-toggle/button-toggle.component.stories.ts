import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl } from '@angular/forms';

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

const inputControl = new FormControl('', []);
export const Primary: Story = {
  args: {
    inputControl,

    inputEnums: ['Easy', 'Medium', 'Hard'],
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button-toggle works!/gi)).toBeTruthy();
  },
};
