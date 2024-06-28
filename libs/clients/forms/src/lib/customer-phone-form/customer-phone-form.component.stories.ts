import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPhoneFormComponent } from './customer-phone-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPhoneFormComponent> = {
  component: CustomerPhoneFormComponent,
  title: 'CustomerPhoneFormComponent',
};
export default meta;
type Story = StoryObj<CustomerPhoneFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customer-phone-form works!/gi)).toBeTruthy();
  },
};
