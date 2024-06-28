import type { Meta, StoryObj } from '@storybook/angular';
import { UserFormComponent } from './user-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserFormComponent> = {
  component: UserFormComponent,
  title: 'UserFormComponent',
};
export default meta;
type Story = StoryObj<UserFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-form works!/gi)).toBeTruthy();
  },
};
