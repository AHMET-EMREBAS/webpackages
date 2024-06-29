import type { Meta, StoryObj } from '@storybook/angular';
import { PurchaseRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PurchaseRawFormComponent> = {
  component: PurchaseRawFormComponent,
  title: 'PurchaseRawFormComponent',
};
export default meta;
type Story = StoryObj<PurchaseRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PurchaseRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PurchaseRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
