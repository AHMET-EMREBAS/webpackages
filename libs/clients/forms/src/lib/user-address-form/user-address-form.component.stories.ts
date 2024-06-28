import type { Meta, StoryObj } from '@storybook/angular';
import { UserAddressFormComponent } from './user-address-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserAddressFormComponent> = {
  component: UserAddressFormComponent,
  title: 'UserAddressFormComponent',
};
export default meta;
type Story = StoryObj<UserAddressFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-address-form works!/gi)).toBeTruthy();
  },
};
