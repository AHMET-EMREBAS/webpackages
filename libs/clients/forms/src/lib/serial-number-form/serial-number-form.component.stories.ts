import type { Meta, StoryObj } from '@storybook/angular';
import { SerialNumberFormComponent } from './serial-number-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SerialNumberFormComponent> = {
  component: SerialNumberFormComponent,
  title: 'SerialNumberFormComponent',
};
export default meta;
type Story = StoryObj<SerialNumberFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/serial-number-form works!/gi)).toBeTruthy();
  },
};
