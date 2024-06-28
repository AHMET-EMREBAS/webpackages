import type { Meta, StoryObj } from '@storybook/angular';
import { DepartmentFormComponent } from './department-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DepartmentFormComponent> = {
  component: DepartmentFormComponent,
  title: 'DepartmentFormComponent',
};
export default meta;
type Story = StoryObj<DepartmentFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/department-form works!/gi)).toBeTruthy();
  },
};
