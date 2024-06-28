import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerProfileFormComponent } from './customer-profile-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerProfileFormComponent> = {
  component: CustomerProfileFormComponent,
  title: 'CustomerProfileFormComponent',
};
export default meta;
type Story = StoryObj<CustomerProfileFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customer-profile-form works!/gi)).toBeTruthy();
  },
};
