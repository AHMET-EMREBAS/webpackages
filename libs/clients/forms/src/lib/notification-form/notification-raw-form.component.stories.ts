import type { Meta, StoryObj } from '@storybook/angular';
import { NotificationRawFormComponent } from './notification-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NotificationRawFormComponent> = {
  component: NotificationRawFormComponent,
  title: 'NotificationRawFormComponent',
};
export default meta;
type Story = StoryObj<NotificationRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'NotificationRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'NotificationRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
