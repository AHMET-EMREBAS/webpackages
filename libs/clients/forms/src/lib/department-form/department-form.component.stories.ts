import { type Meta, type StoryObj } from '@storybook/angular';
import { DepartmentFormComponent } from './department-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DepartmentFormComponent> = {
  component: DepartmentFormComponent,
  title: 'DepartmentFormComponent',
};

export default meta;

type Story = StoryObj<DepartmentFormComponent>;

export const HttpForm: Story = {
  args: {
    submitButtonLabel: 'Post Form',
    formStoreName: 'DepartmentHttpForm',
  },
};

export const EventForm: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'DepartmentEventForm',
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
