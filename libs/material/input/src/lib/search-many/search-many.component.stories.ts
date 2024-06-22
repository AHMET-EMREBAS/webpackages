import type { Meta, StoryObj } from '@storybook/angular';
import { SearchManyComponent } from './search-many.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SearchManyComponent> = {
  component: SearchManyComponent,
  title: 'SearchManyComponent',
};
export default meta;
type Story = StoryObj<SearchManyComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/search-many works!/gi)).toBeTruthy();
  },
};
