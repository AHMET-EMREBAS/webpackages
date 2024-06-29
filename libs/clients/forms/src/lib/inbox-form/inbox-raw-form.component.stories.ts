import type { Meta, StoryObj } from '@storybook/angular';
import { InboxRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InboxRawFormComponent> = {
  component: InboxRawFormComponent,
  title: 'InboxRawFormComponent',
};
export default meta;
type Story = StoryObj<InboxRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'InboxRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'InboxRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
