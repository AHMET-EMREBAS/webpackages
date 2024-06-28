import type { Meta, StoryObj } from '@storybook/angular';
import { CartFormComponent } from './cart-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CartFormComponent> = {
  component: CartFormComponent,
  title: 'CartFormComponent',
};
export default meta;
type Story = StoryObj<CartFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cart-form works!/gi)).toBeTruthy();
  },
};
