import type { Meta, StoryObj } from '@storybook/angular';
import { ProductUpdateFormComponent } from './product-update-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductUpdateFormComponent> = {
  component: ProductUpdateFormComponent,
  title: 'ProductUpdateFormComponent',
};
export default meta;
type Story = StoryObj<ProductUpdateFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-update-form works!/gi)).toBeTruthy();
  },
};
