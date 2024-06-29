import type { Meta, StoryObj } from '@storybook/angular';
import { ImgRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ImgRawFormComponent> = {
  component: ImgRawFormComponent,
  title: 'ImgRawFormComponent',
};
export default meta;
type Story = StoryObj<ImgRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ImgRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ImgRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
