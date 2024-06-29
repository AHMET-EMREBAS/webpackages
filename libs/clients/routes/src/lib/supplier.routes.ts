import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
  provideUpdateFormGroup,
  provideUpdateInputOptions,
} from '@webpackages/material/core';
import { SupplierMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SupplierFormGroup,
  SupplierUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { SupplierService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const SupplierRoutes: Routes = [
  {
    path: '',
    title: 'Supplier',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Supplier', icon: 'table' },
        { route: ['editor'], label: 'New Supplier', icon: 'add' },
      ]),
      provideEntityCollectionService(SupplierService),
      provideTableColumnOptions(toTableColumnOptions(SupplierMetadata)),
      provideInputOptions(toFormInputOptions(SupplierMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SupplierMetadata)),
      provideFormGroup(SupplierFormGroup()),
      provideUpdateFormGroup(SupplierUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Supplier');
    },
  },
];
