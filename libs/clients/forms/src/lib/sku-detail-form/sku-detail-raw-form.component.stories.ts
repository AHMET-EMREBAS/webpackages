import type { Meta, StoryObj } from '@storybook/angular';
import { SkuDetailRawFormComponent } from './sku-detail-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuDetailRawFormComponent> = {
  component: SkuDetailRawFormComponent,
  title: 'SkuDetailRawFormComponent',
};
export default meta;
type Story = StoryObj<SkuDetailRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SkuDetailRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SkuDetailRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
