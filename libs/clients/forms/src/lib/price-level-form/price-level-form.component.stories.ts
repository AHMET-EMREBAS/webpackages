import { type Meta, type StoryObj } from '@storybook/angular';
import { PriceLevelFormComponent } from './price-level-form.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PriceLevelFormComponent> = {
  component: PriceLevelFormComponent,
  title: 'PriceLevelFormComponent',
};

export default meta;

type Story = StoryObj<PriceLevelFormComponent>;

export const HttpForm: Story = {
  args: {
    submitButtonLabel: 'Post Form',
    formStoreName: 'PriceLevelHttpForm',
  },
};

export const EventForm: Story = {
  args: {
    onlyEmitEvent: true,
    submitButtonLabel: 'Emit Form',
    formStoreName: 'PriceLevelEventForm',
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
