import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerEmailRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerEmailRawFormComponent> = {
  component: CustomerEmailRawFormComponent,
  title: 'CustomerEmailRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerEmailRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerEmailRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerEmailRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
