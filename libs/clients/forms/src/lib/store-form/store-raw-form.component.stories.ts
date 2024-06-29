import type { Meta, StoryObj } from '@storybook/angular';
import { StoreRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StoreRawFormComponent> = {
  component: StoreRawFormComponent,
  title: 'StoreRawFormComponent',
};
export default meta;
type Story = StoryObj<StoreRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'StoreRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'StoreRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
