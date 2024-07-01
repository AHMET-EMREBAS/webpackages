import type { Meta, StoryObj } from '@storybook/angular';
import { QuantityEditorComponent } from './quantity-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuantityEditorComponent> = {
  component: QuantityEditorComponent,
  title: 'QuantityEditorComponent',
};
export default meta;
type Story = StoryObj<QuantityEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/quantity-editor works!/gi)).toBeTruthy();
  },
};
