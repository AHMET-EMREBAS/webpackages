import type { Meta, StoryObj } from '@storybook/angular';
import { SkuUpdateFormComponent } from './sku-update-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SkuUpdateFormComponent> = {
  component: SkuUpdateFormComponent,
  title: 'SkuUpdateFormComponent',
};
export default meta;

type Story = StoryObj<SkuUpdateFormComponent>;
export const Http: Story = {
  args: {
    submitButtonLabel: 'Put Form',
    formStoreName: 'SkuUpdateFormEmitEvent',
    entityId: 1,
  },
};

export const EventEmitter: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'SkuUpdateFormEmitEvent',
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
