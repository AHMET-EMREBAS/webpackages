import type { Meta, StoryObj } from '@storybook/angular';
import { NotificationFormComponent } from './notification-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NotificationFormComponent> = {
  component: NotificationFormComponent,
  title: 'NotificationFormComponent',
};
export default meta;
type Story = StoryObj<NotificationFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/notification-form works!/gi)).toBeTruthy();
  },
};
