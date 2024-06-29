import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAccountRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAccountRawFormComponent> = {
  component: CustomerAccountRawFormComponent,
  title: 'CustomerAccountRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerAccountRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerAccountRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerAccountRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
