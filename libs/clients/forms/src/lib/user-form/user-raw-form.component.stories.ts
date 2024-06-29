import type { Meta, StoryObj } from '@storybook/angular';
import { UserRawFormComponent } from './user-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserRawFormComponent> = {
  component: UserRawFormComponent,
  title: 'UserRawFormComponent',
};
export default meta;
type Story = StoryObj<UserRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
