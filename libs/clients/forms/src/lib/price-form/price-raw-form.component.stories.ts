import type { Meta, StoryObj } from '@storybook/angular';
import { PriceRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceRawFormComponent> = {
  component: PriceRawFormComponent,
  title: 'PriceRawFormComponent',
};
export default meta;
type Story = StoryObj<PriceRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PriceRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PriceRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
