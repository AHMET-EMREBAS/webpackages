import type { Meta, StoryObj } from '@storybook/angular';
import { DiscountFormComponent } from './discount-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DiscountFormComponent> = {
  component: DiscountFormComponent,
  title: 'DiscountFormComponent',
};
export default meta;
type Story = StoryObj<DiscountFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/discount-form works!/gi)).toBeTruthy();
  },
};
