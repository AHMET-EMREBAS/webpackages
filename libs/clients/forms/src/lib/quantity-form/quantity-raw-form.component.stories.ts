import type { Meta, StoryObj } from '@storybook/angular';
import { QuantityRawFormComponent } from './quantity-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<QuantityRawFormComponent> = {
  component: QuantityRawFormComponent,
  title: 'QuantityRawFormComponent',
};
export default meta;
type Story = StoryObj<QuantityRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'QuantityRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'QuantityRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
