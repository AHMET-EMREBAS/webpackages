import { type Meta, type StoryObj } from '@storybook/angular';
import { SessionFormComponent } from './session-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SessionFormComponent> = {
  component: SessionFormComponent,
  title: 'SessionFormComponent',
};

export default meta;

type Story = StoryObj<SessionFormComponent>;

export const HttpForm: Story = {
  args: {
    submitButtonLabel: 'Post Form',
    formStoreName: 'SessionHttpForm',
  },
};

export const EventForm: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'SessionEventForm',
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
