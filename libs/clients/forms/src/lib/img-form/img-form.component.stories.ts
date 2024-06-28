import type { Meta, StoryObj } from '@storybook/angular';
import { ImgFormComponent } from './img-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ImgFormComponent> = {
  component: ImgFormComponent,
  title: 'ImgFormComponent',
};
export default meta;
type Story = StoryObj<ImgFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/img-form works!/gi)).toBeTruthy();
  },
};
