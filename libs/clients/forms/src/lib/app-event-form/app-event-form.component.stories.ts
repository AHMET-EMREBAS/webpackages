import type { Meta, StoryObj } from '@storybook/angular';
import { AppEventFormComponent } from './app-event-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AppEventFormComponent> = {
  component: AppEventFormComponent,
  title: 'AppEventFormComponent',
};
export default meta;
type Story = StoryObj<AppEventFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/app-event-form works!/gi)).toBeTruthy();
  },
};
