import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerRawFormComponent> = {
  component: CustomerRawFormComponent,
  title: 'CustomerRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CustomerRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CustomerRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
