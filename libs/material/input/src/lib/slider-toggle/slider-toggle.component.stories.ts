import type { Meta, StoryObj } from '@storybook/angular';
import { SliderToggleComponent } from './slider-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SliderToggleComponent> = {
  component: SliderToggleComponent,
  title: 'SliderToggleComponent',
};
export default meta;
type Story = StoryObj<SliderToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slider-toggle works!/gi)).toBeTruthy();
  },
};
