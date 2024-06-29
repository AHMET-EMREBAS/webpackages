import type { Meta, StoryObj } from '@storybook/angular';
import { AppEventRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppEventRawFormComponent> = {
  component: AppEventRawFormComponent,
  title: 'AppEventRawFormComponent',
};
export default meta;
type Story = StoryObj<AppEventRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AppEventRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AppEventRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
