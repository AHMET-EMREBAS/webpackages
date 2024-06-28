import type { Meta, StoryObj } from '@storybook/angular';
import { UserEditorComponent } from './user-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserEditorComponent> = {
  component: UserEditorComponent,
  title: 'UserEditorComponent',
};
export default meta;
type Story = StoryObj<UserEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-editor works!/gi)).toBeTruthy();
  },
};
