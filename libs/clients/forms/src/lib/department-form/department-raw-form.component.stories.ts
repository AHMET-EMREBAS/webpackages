import type { Meta, StoryObj } from '@storybook/angular';
import { DepartmentRawFormComponent } from './department-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DepartmentRawFormComponent> = {
  component: DepartmentRawFormComponent,
  title: 'DepartmentRawFormComponent',
};
export default meta;
type Story = StoryObj<DepartmentRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'DepartmentRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'DepartmentRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
