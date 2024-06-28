import type { Meta, StoryObj } from '@storybook/angular';
import { QuantityFormComponent } from './quantity-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuantityFormComponent> = {
  component: QuantityFormComponent,
  title: 'QuantityFormComponent',
};
export default meta;
type Story = StoryObj<QuantityFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/quantity-form works!/gi)).toBeTruthy();
  },
};
