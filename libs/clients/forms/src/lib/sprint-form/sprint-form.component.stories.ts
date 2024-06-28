import type { Meta, StoryObj } from '@storybook/angular';
import { SprintFormComponent } from './sprint-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SprintFormComponent> = {
  component: SprintFormComponent,
  title: 'SprintFormComponent',
};
export default meta;
type Story = StoryObj<SprintFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sprint-form works!/gi)).toBeTruthy();
  },
};
