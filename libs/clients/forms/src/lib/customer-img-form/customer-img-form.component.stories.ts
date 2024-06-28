import { type Meta, type StoryObj } from '@storybook/angular';
import { CustomerImgFormComponent } from './customer-img-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerImgFormComponent> = {
  component: CustomerImgFormComponent,
  title: 'CustomerImgFormComponent',
};

export default meta;

type Story = StoryObj<CustomerImgFormComponent>;

export const HttpForm: Story = {
  args: {
    submitButtonLabel: 'Post Form',
    formStoreName: 'CustomerImgHttpForm',
  },
};

export const EventForm: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'CustomerImgEventForm',
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
