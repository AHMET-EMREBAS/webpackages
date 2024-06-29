import type { Meta, StoryObj } from '@storybook/angular';
import { SerialNumberRawFormComponent } from './serial-number-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SerialNumberRawFormComponent> = {
  component: SerialNumberRawFormComponent,
  title: 'SerialNumberRawFormComponent',
};
export default meta;
type Story = StoryObj<SerialNumberRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'SerialNumberRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'SerialNumberRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
