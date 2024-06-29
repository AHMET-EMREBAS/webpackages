import type { Meta, StoryObj } from '@storybook/angular';
import { UserEmailRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserEmailRawFormComponent> = {
  component: UserEmailRawFormComponent,
  title: 'UserEmailRawFormComponent',
};
export default meta;
type Story = StoryObj<UserEmailRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserEmailRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserEmailRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
