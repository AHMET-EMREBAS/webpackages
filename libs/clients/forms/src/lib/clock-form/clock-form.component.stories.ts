import type { Meta, StoryObj } from '@storybook/angular';
import { ClockFormComponent } from './clock-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ClockFormComponent> = {
  component: ClockFormComponent,
  title: 'ClockFormComponent',
};
export default meta;
type Story = StoryObj<ClockFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/clock-form works!/gi)).toBeTruthy();
  },
};
