import type { Meta, StoryObj } from '@storybook/angular';
import { CreateComponent } from './create.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateComponent> = {
  component: CreateComponent,
  title: 'CreateComponent',
};
export default meta;
type Story = StoryObj<CreateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/create works!/gi)).toBeTruthy();
  },
};
