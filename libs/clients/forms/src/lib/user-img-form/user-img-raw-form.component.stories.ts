import type { Meta, StoryObj } from '@storybook/angular';
import { UserImgRawFormComponent } from './user-img-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserImgRawFormComponent> = {
  component: UserImgRawFormComponent,
  title: 'UserImgRawFormComponent',
};
export default meta;
type Story = StoryObj<UserImgRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserImgRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'UserImgRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
