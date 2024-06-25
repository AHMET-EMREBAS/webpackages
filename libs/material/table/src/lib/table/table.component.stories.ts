import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import {
  MockCategoryCollectionService,
  provideDefaultHttpSearchQueryBuilder,
  provideEntityCollectionService,
  provideMockCategoryHttpClient,
  provideDefaultContextDeleteRouteValue,
  provideDefaultContextEditRouteValue,
  provideDefaultIdColumnOptions,
  provideDefaultTableRowRouteValueHandler,
  provideDefaultTimestampColumnOptions,
} from '@webpackages/material/core';
import { getBuiltinCategories } from '@webpackages/types';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

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
        provideMockCategoryHttpClient(),

        provideHttpClient(
          withInterceptors([
            (req, next) => {
              return next(
                req.clone({
                  url: `http://localhost:3001/${req.url}`,
                })
              );
            },
          ])
        ),

        provideStore({}),
        provideEffects({}),
        provideEntityData(
          {
            entityMetadata: {
              Sample: {},
              Category: {},
            },
            pluralNames: {
              Sample: 'Samples',
              Category: 'Categorys',
            },
          },
          withEffects()
        ),
        provideEntityCollectionService(MockCategoryCollectionService),
        //
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    tableColumns: [{ name: 'name', label: 'Name' }],
  },
};
export const NoTimestamp: Story = {
  args: { ...Primary.args, showTimestamps: false },
};

export const Heading: Story = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/table works!/gi)).toBeTruthy();
  },
};
