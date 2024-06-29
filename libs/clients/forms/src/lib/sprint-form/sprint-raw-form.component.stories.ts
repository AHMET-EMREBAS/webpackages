import type { Meta, StoryObj } from '@storybook/angular';
import { SprintRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SprintRawFormComponent> = {
  component: SprintRawFormComponent,
  title: 'SprintRawFormComponent',
};
export default meta;
type Story = StoryObj<SprintRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SprintRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'SprintRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
