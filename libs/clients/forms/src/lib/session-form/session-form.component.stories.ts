import type { Meta, StoryObj } from '@storybook/angular';
import { SessionFormComponent } from './session-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SessionFormComponent> = {
  component: SessionFormComponent,
  title: 'SessionFormComponent',
};
export default meta;
type Story = StoryObj<SessionFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/session-form works!/gi)).toBeTruthy();
  },
};
