import type { Meta, StoryObj } from '@storybook/angular';
import { PriceLevelFormComponent } from './price-level-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceLevelFormComponent> = {
  component: PriceLevelFormComponent,
  title: 'PriceLevelFormComponent',
};
export default meta;
type Story = StoryObj<PriceLevelFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/price-level-form works!/gi)).toBeTruthy();
  },
};
