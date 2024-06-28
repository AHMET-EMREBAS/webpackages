import type { Meta, StoryObj } from '@storybook/angular';
import { PhoneFormComponent } from './phone-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PhoneFormComponent> = {
  component: PhoneFormComponent,
  title: 'PhoneFormComponent',
};
export default meta;
type Story = StoryObj<PhoneFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/phone-form works!/gi)).toBeTruthy();
  },
};
