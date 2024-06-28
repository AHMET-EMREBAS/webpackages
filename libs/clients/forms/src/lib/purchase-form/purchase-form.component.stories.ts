import type { Meta, StoryObj } from '@storybook/angular';
import { PurchaseFormComponent } from './purchase-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PurchaseFormComponent> = {
  component: PurchaseFormComponent,
  title: 'PurchaseFormComponent',
};
export default meta;
type Story = StoryObj<PurchaseFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/purchase-form works!/gi)).toBeTruthy();
  },
};
