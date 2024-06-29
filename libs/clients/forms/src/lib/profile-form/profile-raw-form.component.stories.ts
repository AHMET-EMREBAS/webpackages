import type { Meta, StoryObj } from '@storybook/angular';
import { ProfileRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProfileRawFormComponent> = {
  component: ProfileRawFormComponent,
  title: 'ProfileRawFormComponent',
};
export default meta;
type Story = StoryObj<ProfileRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProfileRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProfileRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
