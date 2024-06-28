import type { Meta, StoryObj } from '@storybook/angular';
import { OrderEditorComponent } from './order-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OrderEditorComponent> = {
  component: OrderEditorComponent,
  title: 'OrderEditorComponent',
};
export default meta;
type Story = StoryObj<OrderEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/order-editor works!/gi)).toBeTruthy();
  },
};
