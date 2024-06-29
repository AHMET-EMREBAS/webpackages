import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateFormComponent } from './update-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateFormComponent> = {
  component: UpdateFormComponent,
  title: 'UpdateFormComponent',
};
export default meta;
type Story = StoryObj<UpdateFormComponent>;

export const Primary: Story = {
  args: {
    entityId: 0,
  },
};

export const Heading: Story = {
  args: {
    entityId: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/update-form works!/gi)).toBeTruthy();
  },
};
