import { Routes } from '@angular/router';
import { FormComponent } from '@webpackages/material/form';
import { provideDefaultAutocompleteOptions } from '@webpackages/material/input';
import {
  TableComponent,
  provideDefaultContextDeleteRouteValue,
  provideDefaultContextEditRouteValue,
  provideDefaultIdColumnOptions,
  provideDefaultTableRowRouteValueHandler,
  provideDefaultTimestampColumnOptions,
  provideTableRowRouteValueHandler,
} from '@webpackages/material/table';
export const ProductRoutes: Routes = [
  {
    path: 'product',
    pathMatch: 'full',
    title: 'Product',
    providers: [
      provideDefaultIdColumnOptions(),
      provideDefaultTimestampColumnOptions(),
      provideDefaultAutocompleteOptions(),
      provideDefaultContextDeleteRouteValue(),
      provideDefaultContextEditRouteValue(),
      provideDefaultTableRowRouteValueHandler(),
    ],
    children: [
      {
        path: 'create',
        loadComponent() {
          return FormComponent;
        },
      },
      {
        path: 'editor/:id',
        loadComponent() {
          return FormComponent;
        },
      },
      {
        path: '',
        loadComponent() {
          return TableComponent;
        },
      },
    ],
  },
];
