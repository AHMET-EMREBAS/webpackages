import type { Meta, StoryObj } from '@storybook/angular';
import { ManufacturerFormComponent } from './manufacturer-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ManufacturerFormComponent> = {
  component: ManufacturerFormComponent,
  title: 'ManufacturerFormComponent',
};
export default meta;
type Story = StoryObj<ManufacturerFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/manufacturer-form works!/gi)).toBeTruthy();
  },
};
