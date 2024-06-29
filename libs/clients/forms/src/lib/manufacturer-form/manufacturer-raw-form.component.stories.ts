import type { Meta, StoryObj } from '@storybook/angular';
import { ManufacturerRawFormComponent } from './manufacturer-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ManufacturerRawFormComponent> = {
  component: ManufacturerRawFormComponent,
  title: 'ManufacturerRawFormComponent',
};
export default meta;
type Story = StoryObj<ManufacturerRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ManufacturerRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'ManufacturerRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
