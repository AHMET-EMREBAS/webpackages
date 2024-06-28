import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerEmailFormComponent } from './customer-email-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerEmailFormComponent> = {
  component: CustomerEmailFormComponent,
  title: 'CustomerEmailFormComponent',
};
export default meta;
type Story = StoryObj<CustomerEmailFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customer-email-form works!/gi)).toBeTruthy();
  },
};
