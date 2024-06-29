import type { Meta, StoryObj } from '@storybook/angular';
import { SaleRawFormComponent } from './sale-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SaleRawFormComponent> = {
  component: SaleRawFormComponent,
  title: 'SaleRawFormComponent',
};
export default meta;
type Story = StoryObj<SaleRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SaleRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SaleRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
