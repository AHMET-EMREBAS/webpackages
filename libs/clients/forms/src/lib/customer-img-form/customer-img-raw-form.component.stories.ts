import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerImgRawFormComponent } from './customer-img-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerImgRawFormComponent> = {
  component: CustomerImgRawFormComponent,
  title: 'CustomerImgRawFormComponent',
};
export default meta;
type Story = StoryObj<CustomerImgRawFormComponent>;

export const Primary: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CustomerImgRawForm' },
};

export const Heading: Story = {
  args: { submitButtonLabel: 'Emit Form', formStoreName: 'CustomerImgRawForm' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
