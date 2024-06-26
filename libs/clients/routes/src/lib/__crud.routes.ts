import { Routes } from '@angular/router';
import {
  DeleteComponent,
  FormComponent,
  UpdateFormComponent,
} from '@webpackages/material/form';
import { ModuleLayoutComponent } from '@webpackages/material/layout';
import { TableComponent } from '@webpackages/material/table';

export const CrudRoutes: Routes = [
  {
    path: '',
    component: ModuleLayoutComponent,
    children: [
      {
        path: 'table',
        loadComponent() {
          return TableComponent;
        },
      },
      {
        path: 'editor',
        loadComponent() {
          return FormComponent;
        },
      },
      {
        path: 'editor/:id',
        loadComponent() {
          return UpdateFormComponent;
        },
      },
      {
        path: 'delete/:id',
        loadComponent() {
          return DeleteComponent;
        },
      },
    ],
  },
];
