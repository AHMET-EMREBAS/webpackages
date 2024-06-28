import type { Meta, StoryObj } from '@storybook/angular';
import { PurchaseOrderFormComponent } from './purchase-order-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PurchaseOrderFormComponent> = {
  component: PurchaseOrderFormComponent,
  title: 'PurchaseOrderFormComponent',
};
export default meta;
type Story = StoryObj<PurchaseOrderFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/purchase-order-form works!/gi)).toBeTruthy();
  },
};
