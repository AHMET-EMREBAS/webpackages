import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import {
  MockCategoryCollectionService,
  provideEntityCollectionService,
  provideMockCategoryHttpClient,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { getBuiltinCategories } from '@webpackages/data';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideRouter([]),
        provideAnimations(),
        provideMockCategoryHttpClient(),
        provideTableColumnOptions([{ name: 'name', label: 'Name' }]),
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
  args: {},
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
