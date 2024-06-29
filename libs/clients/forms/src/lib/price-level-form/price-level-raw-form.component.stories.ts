import type { Meta, StoryObj } from '@storybook/angular';
import { PriceLevelRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceLevelRawFormComponent> = {
  component: PriceLevelRawFormComponent,
  title: 'PriceLevelRawFormComponent',
};
export default meta;
type Story = StoryObj<PriceLevelRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PriceLevelRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PriceLevelRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
