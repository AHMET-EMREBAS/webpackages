import type { Meta, StoryObj } from '@storybook/angular';
import { RawFormComponent } from './raw-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RawFormComponent> = {
  component: RawFormComponent,
  title: 'RawFormComponent',
};
export default meta;
type Story = StoryObj<RawFormComponent>;

export const Primary: Story = {
  args: {
    formStoreName: '',
    onlyEmitEvent: false,
    submitButtonLabel: 'Submit',
  },
};

export const Heading: Story = {
  args: {
    formStoreName: '',
    onlyEmitEvent: false,
    submitButtonLabel: 'Submit',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/raw-form works!/gi)).toBeTruthy();
  },
};
