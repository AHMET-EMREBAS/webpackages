import type { Meta, StoryObj } from '@storybook/angular';
import { UserProfileFormComponent } from './user-profile-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserProfileFormComponent> = {
  component: UserProfileFormComponent,
  title: 'UserProfileFormComponent',
};
export default meta;
type Story = StoryObj<UserProfileFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-profile-form works!/gi)).toBeTruthy();
  },
};