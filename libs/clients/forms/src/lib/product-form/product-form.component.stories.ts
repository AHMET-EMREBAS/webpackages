import type { Meta, StoryObj } from '@storybook/angular';
import { ProductFormComponent } from './product-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductFormComponent> = {
  component: ProductFormComponent,
  title: 'ProductFormComponent',
};
export default meta;
type Story = StoryObj<ProductFormComponent>;

export const Primary: Story = {
  args: {},
};
export const EmitEVent: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Event',
    formStoreName: 'ProductFormEmitEvent',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-form works!/gi)).toBeTruthy();
  },
};
