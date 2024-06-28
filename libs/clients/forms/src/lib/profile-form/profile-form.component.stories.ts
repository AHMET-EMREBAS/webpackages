import type { Meta, StoryObj } from '@storybook/angular';
import { ProfileFormComponent } from './profile-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProfileFormComponent> = {
  component: ProfileFormComponent,
  title: 'ProfileFormComponent',
};
export default meta;
type Story = StoryObj<ProfileFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/profile-form works!/gi)).toBeTruthy();
  },
};
