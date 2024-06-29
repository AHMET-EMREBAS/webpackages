import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAddressRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAddressRawFormComponent> = {
  component: CustomerAddressRawFormComponent,
  title: 'CustomerAddressRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerAddressRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerAddressRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerAddressRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
