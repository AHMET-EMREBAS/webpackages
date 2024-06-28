import type { Meta, StoryObj } from '@storybook/angular';
import { ProductImgFormComponent } from './product-img-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductImgFormComponent> = {
  component: ProductImgFormComponent,
  title: 'ProductImgFormComponent',
};
export default meta;
type Story = StoryObj<ProductImgFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-img-form works!/gi)).toBeTruthy();
  },
};
