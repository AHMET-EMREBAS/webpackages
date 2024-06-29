import type { Meta, StoryObj } from '@storybook/angular';
import { ProjectRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProjectRawFormComponent> = {
  component: ProjectRawFormComponent,
  title: 'ProjectRawFormComponent',
};
export default meta;
type Story = StoryObj<ProjectRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProjectRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'ProjectRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
