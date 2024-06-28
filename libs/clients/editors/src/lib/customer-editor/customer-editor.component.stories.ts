import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerEditorComponent } from './customer-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerEditorComponent> = {
  component: CustomerEditorComponent,
  title: 'CustomerEditorComponent',
};
export default meta;
type Story = StoryObj<CustomerEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customer-editor works!/gi)).toBeTruthy();
  },
};
