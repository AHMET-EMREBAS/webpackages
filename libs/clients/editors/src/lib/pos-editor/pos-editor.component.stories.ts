import type { Meta, StoryObj } from '@storybook/angular';
import { PosEditorComponent } from './pos-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosEditorComponent> = {
  component: PosEditorComponent,
  title: 'PosEditorComponent',
};
export default meta;
type Story = StoryObj<PosEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos-editor works!/gi)).toBeTruthy();
  },
};
