import type { Meta, StoryObj } from '@storybook/angular';
import { ProductImgRawFormComponent } from './product-img-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductImgRawFormComponent> = {
  component: ProductImgRawFormComponent,
  title: 'ProductImgRawFormComponent',
};
export default meta;
type Story = StoryObj<ProductImgRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProductImgRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProductImgRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
