import { type Meta, type StoryObj } from '@storybook/angular';
import { SerialNumberFormComponent } from './serial-number-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SerialNumberFormComponent> = {
  component: SerialNumberFormComponent,
  title: 'SerialNumberFormComponent',
};

export default meta;

type Story = StoryObj<SerialNumberFormComponent>;

export const HttpForm: Story = {
  args: {
    submitButtonLabel: 'Post Form',
    formStoreName: 'SerialNumberHttpForm',
  },
};

export const EventForm: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'SerialNumberEventForm',
  },
};

export const EventHeading: Story = {
  ...EventForm,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Emit Form/gi)).toBeTruthy();
  },
};

export const HttpHeading: Story = {
  ...HttpForm,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Post Form/gi)).toBeTruthy();
  },
};
