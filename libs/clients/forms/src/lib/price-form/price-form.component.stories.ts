import type { Meta, StoryObj } from '@storybook/angular';
import { PriceFormComponent } from './price-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceFormComponent> = {
  component: PriceFormComponent,
  title: 'PriceFormComponent',
};
export default meta;
type Story = StoryObj<PriceFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/price-form works!/gi)).toBeTruthy();
  },
};
