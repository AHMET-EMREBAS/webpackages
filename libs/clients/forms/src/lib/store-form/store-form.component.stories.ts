import type { Meta, StoryObj } from '@storybook/angular';
import { StoreFormComponent } from './store-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StoreFormComponent> = {
  component: StoreFormComponent,
  title: 'StoreFormComponent',
};
export default meta;
type Story = StoryObj<StoreFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/store-form works!/gi)).toBeTruthy();
  },
};
