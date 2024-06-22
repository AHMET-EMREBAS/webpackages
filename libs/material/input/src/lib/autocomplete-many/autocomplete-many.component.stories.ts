import type { Meta, StoryObj } from '@storybook/angular';
import { AutocompleteManyComponent } from './autocomplete-many.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AutocompleteManyComponent> = {
  component: AutocompleteManyComponent,
  title: 'AutocompleteManyComponent',
};
export default meta;
type Story = StoryObj<AutocompleteManyComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/autocomplete-many works!/gi)).toBeTruthy();
  },
};
