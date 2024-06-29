import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerProfileRawFormComponent } from './customer-profile-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerProfileRawFormComponent> = {
  component: CustomerProfileRawFormComponent,
  title: 'CustomerProfileRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerProfileRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerProfileRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerProfileRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
