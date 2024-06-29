import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteComponent } from './delete.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteComponent> = {
  component: DeleteComponent,
  title: 'DeleteComponent',
};
export default meta;
type Story = StoryObj<DeleteComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/delete works!/gi)).toBeTruthy();
  },
};
