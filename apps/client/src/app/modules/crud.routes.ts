import { Routes } from '@angular/router';
import { FormComponent } from '@webpackages/material/form';
import { ModuleLayoutComponent } from '@webpackages/material/layout';
import { TableComponent } from '@webpackages/material/table';

export const CrudRoutes: Routes = [
  {
    path: '',
    component: ModuleLayoutComponent,
    children: [
      {
        path: 'editor',
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
        path: 'table',
        loadComponent() {
          return TableComponent;
        },
      },
      {
        path: 'delete/:id',
        loadComponent() {
          return TableComponent;
        },
      },
    ],
  },
];
