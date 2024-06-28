import type { Meta, StoryObj } from '@storybook/angular';
import { MessageFormComponent } from './message-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MessageFormComponent> = {
  component: MessageFormComponent,
  title: 'MessageFormComponent',
};
export default meta;
type Story = StoryObj<MessageFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/message-form works!/gi)).toBeTruthy();
  },
};
