import type { Meta, StoryObj } from '@storybook/angular';
import { TaskRawFormComponent } from './task-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TaskRawFormComponent> = {
  component: TaskRawFormComponent,
  title: 'TaskRawFormComponent',
};
export default meta;
type Story = StoryObj<TaskRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'TaskRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'TaskRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
