import type { Meta, StoryObj } from '@storybook/angular';
import { OrganizationUpdateFormComponent } from './organization-update-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<OrganizationUpdateFormComponent> = {
  component: OrganizationUpdateFormComponent,
  title: 'OrganizationUpdateFormComponent',
};
export default meta;

type Story = StoryObj<OrganizationUpdateFormComponent>;
export const Http: Story = {
  args: {
    submitButtonLabel: 'Put Form',
    formStoreName: 'OrganizationUpdateFormEmitEvent',
    entityId: 1,
  },
};

export const EventEmitter: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'OrganizationUpdateFormEmitEvent',
    entityId: 1,
  },
};

export const EventHeading: Story = {
  ...EventEmitter,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Put Form/gi)).toBeTruthy();
  },
};

export const HttpHeading: Story = {
  ...Http,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Put Form/gi)).toBeTruthy();
  },
};
