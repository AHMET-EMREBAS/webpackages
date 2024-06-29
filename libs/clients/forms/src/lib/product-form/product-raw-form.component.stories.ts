import type { Meta, StoryObj } from '@storybook/angular';
import { ProductRawFormComponent } from './product-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductRawFormComponent> = {
  component: ProductRawFormComponent,
  title: 'ProductRawFormComponent',
};
export default meta;
type Story = StoryObj<ProductRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProductRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProductRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
