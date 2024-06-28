import type { Meta, StoryObj } from '@storybook/angular';
import { AccessTokenFormComponent } from './access-token-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AccessTokenFormComponent> = {
  component: AccessTokenFormComponent,
  title: 'AccessTokenFormComponent',
};
export default meta;
type Story = StoryObj<AccessTokenFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/access-token-form works!/gi)).toBeTruthy();
  },
};
