import type { Meta, StoryObj } from '@storybook/angular';
import { UserPhoneFormComponent } from './user-phone-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserPhoneFormComponent> = {
  component: UserPhoneFormComponent,
  title: 'UserPhoneFormComponent',
};
export default meta;
type Story = StoryObj<UserPhoneFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-phone-form works!/gi)).toBeTruthy();
  },
};
