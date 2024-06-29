import type { Meta, StoryObj } from '@storybook/angular';
import { PhoneRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PhoneRawFormComponent> = {
  component: PhoneRawFormComponent,
  title: 'PhoneRawFormComponent',
};
export default meta;
type Story = StoryObj<PhoneRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PhoneRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'PhoneRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
