import type { Meta, StoryObj } from '@storybook/angular';
import { AddressRawFormComponent } from './address-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AddressRawFormComponent> = {
  component: AddressRawFormComponent,
  title: 'AddressRawFormComponent',
};
export default meta;
type Story = StoryObj<AddressRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AddressRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'AddressRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
