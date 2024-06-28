import type { Meta, StoryObj } from '@storybook/angular';
import { InboxFormComponent } from './inbox-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InboxFormComponent> = {
  component: InboxFormComponent,
  title: 'InboxFormComponent',
};
export default meta;
type Story = StoryObj<InboxFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/inbox-form works!/gi)).toBeTruthy();
  },
};
