import type { Meta, StoryObj } from '@storybook/angular';
import { CategoryRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CategoryRawFormComponent> = {
  component: CategoryRawFormComponent,
  title: 'CategoryRawFormComponent',
};
export default meta;
type Story = StoryObj<CategoryRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CategoryRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CategoryRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
