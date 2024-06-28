import type { Meta, StoryObj } from '@storybook/angular';
import { SkuFormComponent } from './sku-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuFormComponent> = {
  component: SkuFormComponent,
  title: 'SkuFormComponent',
};
export default meta;
type Story = StoryObj<SkuFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sku-form works!/gi)).toBeTruthy();
  },
};
