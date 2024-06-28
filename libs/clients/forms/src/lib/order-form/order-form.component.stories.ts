import type { Meta, StoryObj } from '@storybook/angular';
import { OrderFormComponent } from './order-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OrderFormComponent> = {
  component: OrderFormComponent,
  title: 'OrderFormComponent',
};
export default meta;
type Story = StoryObj<OrderFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/order-form works!/gi)).toBeTruthy();
  },
};
