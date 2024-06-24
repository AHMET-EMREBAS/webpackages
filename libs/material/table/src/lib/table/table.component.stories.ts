import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideDefaultHttpSearchQueryBuilder,
  provideMockCategoryHttpClient,
} from '@webpackages/material/core';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideDefaultHttpSearchQueryBuilder(),
        provideMockCategoryHttpClient(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/table works!/gi)).toBeTruthy();
  },
};
