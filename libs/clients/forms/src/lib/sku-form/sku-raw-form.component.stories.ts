import type { Meta, StoryObj } from '@storybook/angular';
import { SkuRawFormComponent } from './sku-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuRawFormComponent> = {
  component: SkuRawFormComponent,
  title: 'SkuRawFormComponent',
};
export default meta;
type Story = StoryObj<SkuRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SkuRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SkuRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
