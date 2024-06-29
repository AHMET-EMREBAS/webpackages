import type { Meta, StoryObj } from '@storybook/angular';
import { UserPhoneRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserPhoneRawFormComponent> = {
  component: UserPhoneRawFormComponent,
  title: 'UserPhoneRawFormComponent',
};
export default meta;
type Story = StoryObj<UserPhoneRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserPhoneRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserPhoneRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
