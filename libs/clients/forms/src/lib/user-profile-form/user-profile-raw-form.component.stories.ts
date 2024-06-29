import type { Meta, StoryObj } from '@storybook/angular';
import { UserProfileRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserProfileRawFormComponent> = {
  component: UserProfileRawFormComponent,
  title: 'UserProfileRawFormComponent',
};
export default meta;
type Story = StoryObj<UserProfileRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserProfileRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserProfileRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
