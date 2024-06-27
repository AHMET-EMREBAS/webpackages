import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateProductFormComponent } from './update-product-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateProductFormComponent> = {
  component: UpdateProductFormComponent,
  title: 'UpdateProductFormComponent',
};
export default meta;
type Story = StoryObj<UpdateProductFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/update-product-form works!/gi)).toBeTruthy();
  },
};
