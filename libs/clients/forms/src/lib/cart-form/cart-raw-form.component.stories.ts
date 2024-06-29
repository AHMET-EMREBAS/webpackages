import type { Meta, StoryObj } from '@storybook/angular';
import { CartRawFormComponent } from './cart-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CartRawFormComponent> = {
  component: CartRawFormComponent,
  title: 'CartRawFormComponent',
};
export default meta;
type Story = StoryObj<CartRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CartRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CartRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
