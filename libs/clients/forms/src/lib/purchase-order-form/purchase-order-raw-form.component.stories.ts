import type { Meta, StoryObj } from '@storybook/angular';
import { PurchaseOrderRawFormComponent } from './purchase-order-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PurchaseOrderRawFormComponent> = {
  component: PurchaseOrderRawFormComponent,
  title: 'PurchaseOrderRawFormComponent',
};
export default meta;
type Story = StoryObj<PurchaseOrderRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'PurchaseOrderRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'PurchaseOrderRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
