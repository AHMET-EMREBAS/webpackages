import type { Meta, StoryObj } from '@storybook/angular';
import { OrderRawFormComponent } from './order-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OrderRawFormComponent> = {
  component: OrderRawFormComponent,
  title: 'OrderRawFormComponent',
};
export default meta;
type Story = StoryObj<OrderRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'OrderRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'OrderRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
