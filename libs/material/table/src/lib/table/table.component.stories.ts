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
  provideDefaultContextDeleteRouteValue,
  provideDefaultContextEditRouteValue,
  provideDefaultIdColumnOptions,
  provideDefaultTableRowRouteValueHandler,
  provideDefaultTimestampColumnOptions,
} from './table.provider';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

const tableData = getBuiltinCategories().map((e) => ({
  eid: e.id,
  ...e,
}));

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]),
        provideAnimations(),
        provideDefaultHttpSearchQueryBuilder(),
        provideMockCategoryHttpClient(),
        provideDefaultIdColumnOptions(),
        provideDefaultTimestampColumnOptions(),
        provideDefaultTableRowRouteValueHandler(),
        provideDefaultContextDeleteRouteValue(),
        provideDefaultContextEditRouteValue(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    tableData,
    tableColumns: [{ name: 'label', label: 'Label' }],
    tableItemsSize: 100,
    pageSize: 5,
  },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/table works!/gi)).toBeTruthy();
  },
};
