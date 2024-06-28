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
export const Http: Story = {
  args: {
    submitButtonLabel: 'Put Form',
    formStoreName: 'ProductFormEmitEvent',
  },
};

export const EventEmitter: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ProductFormEmitEvent',
  },
};

export const Heading: Story = {
  ...Http,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Put Form/gi)).toBeTruthy();
  },
};
