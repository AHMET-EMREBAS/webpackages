import type { Meta, StoryObj } from '@storybook/angular';
import { EmailRawFormComponent } from './email-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EmailRawFormComponent> = {
  component: EmailRawFormComponent,
  title: 'EmailRawFormComponent',
};
export default meta;
type Story = StoryObj<EmailRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'EmailRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'EmailRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
