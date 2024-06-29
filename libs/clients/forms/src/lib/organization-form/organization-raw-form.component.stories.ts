import type { Meta, StoryObj } from '@storybook/angular';
import { OrganizationRawFormComponent } from './-raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OrganizationRawFormComponent> = {
  component: OrganizationRawFormComponent,
  title: 'OrganizationRawFormComponent',
};
export default meta;
type Story = StoryObj<OrganizationRawFormComponent>;

export const Primary: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'OrganizationRawForm',
  },
};

export const Heading: Story = {
  args: {
    submitButtonLabel: 'Emit Form',
    formStoreName: 'OrganizationRawForm',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};
