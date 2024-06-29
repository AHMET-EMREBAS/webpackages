import type { Meta, StoryObj } from '@storybook/angular';
import { MessageRawFormComponent } from './message-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MessageRawFormComponent> = {
  component: MessageRawFormComponent,
  title: 'MessageRawFormComponent',
};
export default meta;
type Story = StoryObj<MessageRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'MessageRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'MessageRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
