import type { Meta, StoryObj } from '@storybook/angular';
import { DiscountRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DiscountRawFormComponent> = {
  component: DiscountRawFormComponent,
  title: 'DiscountRawFormComponent',
};
export default meta;
type Story = StoryObj<DiscountRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'DiscountRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'DiscountRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
