import type { Meta, StoryObj } from '@storybook/angular';
import { ProductAttributeUpdateFormComponent } from './product-attribute-update-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductAttributeUpdateFormComponent> = {
  component: ProductAttributeUpdateFormComponent,
  title: 'ProductAttributeUpdateFormComponent',
};
export default meta;

type Story = StoryObj<ProductAttributeUpdateFormComponent>;
export const Http: Story = {
  args: {
    submitButtonLabel: 'Put Form',
    formStoreName: 'ProductAttributeUpdateFormEmitEvent',
    entityId: 1,
  },
};

export const EventEmitter: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ProductAttributeUpdateFormEmitEvent',
    entityId: 1,
  },
};

export const EventHeading: Story = {
  ...EventEmitter,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Put Form/gi)).toBeTruthy();
  },
};

export const HttpHeading: Story = {
  ...Http,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Put Form/gi)).toBeTruthy();
  },
};
