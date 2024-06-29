import type { Meta, StoryObj } from '@storybook/angular';
import { AccessTokenRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AccessTokenRawFormComponent> = {
  component: AccessTokenRawFormComponent,
  title: 'AccessTokenRawFormComponent',
};
export default meta;
type Story = StoryObj<AccessTokenRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AccessTokenRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AccessTokenRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
