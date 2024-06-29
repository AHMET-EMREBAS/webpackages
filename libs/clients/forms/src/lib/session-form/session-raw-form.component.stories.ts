import type { Meta, StoryObj } from '@storybook/angular';
import { SessionRawFormComponent } from './session-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SessionRawFormComponent> = {
  component: SessionRawFormComponent,
  title: 'SessionRawFormComponent',
};
export default meta;
type Story = StoryObj<SessionRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SessionRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SessionRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
