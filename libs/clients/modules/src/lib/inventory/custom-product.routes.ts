import { Routes } from '@angular/router';
import { ModuleLayoutComponent } from '@webpackages/material/layout';
import { TableComponent } from '@webpackages/material/table';
import { ProductEditorComponent } from '@webpackages/clients/editors';
import {
  DeleteComponent,
  UpdateFormComponent,
} from '@webpackages/material/form';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { ProductService } from '@webpackages/clients/ngrx';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import { ProductMetadata } from '@webpackages/metadata';
import {
  ProductFormGroup,
  ProductUpdateFormGroup,
} from '@webpackages/clients/form-groups';

export const CustomProductRoutes: Routes = [
  {
    path: '',
    component: ModuleLayoutComponent,
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View SkuDetail', icon: 'table' },
        { route: ['editor'], label: 'New SkuDetail', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions(toTableColumnOptions(ProductMetadata)),
      provideInputOptions(toFormInputOptions(ProductMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ProductMetadata)),
      provideFormGroup(ProductFormGroup()),
      provideUpdateFormGroup(ProductUpdateFormGroup()),
    ],
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full',
      },
      {
        path: 'table',
        loadComponent() {
          return TableComponent;
        },
      },
      {
        path: 'editor',
        loadComponent() {
          return ProductEditorComponent;
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
