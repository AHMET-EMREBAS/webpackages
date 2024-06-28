import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAddressFormComponent } from './customer-address-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAddressFormComponent> = {
  component: CustomerAddressFormComponent,
  title: 'CustomerAddressFormComponent',
};
export default meta;
type Story = StoryObj<CustomerAddressFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customer-address-form works!/gi)).toBeTruthy();
  },
};
