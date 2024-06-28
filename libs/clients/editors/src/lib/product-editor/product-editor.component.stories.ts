import type { Meta, StoryObj } from '@storybook/angular';
import { ProductEditorComponent } from './product-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProductEditorComponent> = {
  component: ProductEditorComponent,
  title: 'ProductEditorComponent',
};
export default meta;
type Story = StoryObj<ProductEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-editor works!/gi)).toBeTruthy();
  },
};
