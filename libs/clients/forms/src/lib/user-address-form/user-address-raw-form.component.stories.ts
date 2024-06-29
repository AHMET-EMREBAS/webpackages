import type { Meta, StoryObj } from '@storybook/angular';
import { UserAddressRawFormComponent } from './user-address-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserAddressRawFormComponent> = {
  component: UserAddressRawFormComponent,
  title: 'UserAddressRawFormComponent',
};
export default meta;
type Story = StoryObj<UserAddressRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserAddressRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserAddressRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
