import type { Meta, StoryObj } from '@storybook/angular';
import { SupplierFormComponent } from './supplier-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SupplierFormComponent> = {
  component: SupplierFormComponent,
  title: 'SupplierFormComponent',
};
export default meta;
type Story = StoryObj<SupplierFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/supplier-form works!/gi)).toBeTruthy();
  },
};
