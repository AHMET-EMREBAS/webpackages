import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import {
  provideDefaultHttpSearchQueryBuilder,
  provideMockCategoryHttpClient,
} from '@webpackages/material/core';
import { getBuiltinCategories } from '@webpackages/types';
import {
  provideDefaultIdColumnOptions,
  provideDefaultTimestampColumnOptions,
} from './providers';
const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideDefaultHttpSearchQueryBuilder(),
        provideMockCategoryHttpClient(),
        provideDefaultIdColumnOptions(),
        provideDefaultTimestampColumnOptions(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    data: getBuiltinCategories(),
    tableColumns: [{ name: 'label', label: 'Label' }],
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/table works!/gi)).toBeTruthy();
  },
};
