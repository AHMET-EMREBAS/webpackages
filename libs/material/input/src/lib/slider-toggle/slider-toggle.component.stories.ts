import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SliderToggleComponent } from './slider-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { INPUT_STORY_PROVIDERS } from '../__story';
import { FormControl } from '@angular/forms';

const meta: Meta<SliderToggleComponent> = {
  component: SliderToggleComponent,
  title: 'SliderToggleComponent',

  decorators: [
    applicationConfig({
      providers: [...INPUT_STORY_PROVIDERS],
    }),
  ],
};
export default meta;
type Story = StoryObj<SliderToggleComponent>;

export const Primary: Story = {
  args: {
    inputControl: new FormControl(true, []),
    inputLabel: 'Is Active',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slider-toggle works!/gi)).toBeTruthy();
  },
};
