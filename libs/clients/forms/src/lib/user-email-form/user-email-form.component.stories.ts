import type { Meta, StoryObj } from '@storybook/angular';
import { UserEmailFormComponent } from './user-email-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserEmailFormComponent> = {
  component: UserEmailFormComponent,
  title: 'UserEmailFormComponent',
};
export default meta;
type Story = StoryObj<UserEmailFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-email-form works!/gi)).toBeTruthy();
  },
};
