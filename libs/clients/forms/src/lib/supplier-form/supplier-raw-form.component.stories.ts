import type { Meta, StoryObj } from '@storybook/angular';
import { SupplierRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SupplierRawFormComponent> = {
  component: SupplierRawFormComponent,
  title: 'SupplierRawFormComponent',
};
export default meta;
type Story = StoryObj<SupplierRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SupplierRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SupplierRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
