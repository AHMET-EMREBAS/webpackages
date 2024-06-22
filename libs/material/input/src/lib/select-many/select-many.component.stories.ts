import type { Meta, StoryObj } from '@storybook/angular';
import { SelectManyComponent } from './select-many.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectManyComponent> = {
  component: SelectManyComponent,
  title: 'SelectManyComponent',
};
export default meta;
type Story = StoryObj<SelectManyComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/select-many works!/gi)).toBeTruthy();
  },
};
