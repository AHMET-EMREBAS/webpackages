import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPhoneRawFormComponent } from './customer-phone-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPhoneRawFormComponent> = {
  component: CustomerPhoneRawFormComponent,
  title: 'CustomerPhoneRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerPhoneRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerPhoneRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerPhoneRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
