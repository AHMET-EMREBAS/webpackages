import type { Meta, StoryObj } from '@storybook/angular';
import { EmailFormComponent } from './email-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<EmailFormComponent> = {
  component: EmailFormComponent,
  title: 'EmailFormComponent',
};
export default meta;
type Story = StoryObj<EmailFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/email-form works!/gi)).toBeTruthy();
  },
};
