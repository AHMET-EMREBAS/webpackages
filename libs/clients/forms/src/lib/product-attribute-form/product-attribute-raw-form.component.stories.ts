import type { Meta, StoryObj } from '@storybook/angular';
import { ProductAttributeRawFormComponent } from './product-attribute-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductAttributeRawFormComponent> = {
  component: ProductAttributeRawFormComponent,
  title: 'ProductAttributeRawFormComponent',
};
export default meta;
type Story = StoryObj<ProductAttributeRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ProductAttributeRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ProductAttributeRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
