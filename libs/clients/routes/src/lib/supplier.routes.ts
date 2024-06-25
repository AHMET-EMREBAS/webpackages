import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { SupplierMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { SupplierFormGroup } from '@webpackages/clients/form-groups';
import { SupplierService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SupplierRoutes: Routes = [
  {
    path: '',
    title: 'Supplier',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Suppliers', icon: 'table' },
        { route: ['editor'], label: 'New Supplier', icon: 'add' },
      ]),
      provideEntityCollectionService(SupplierService),
      provideTableColumnOptions(toTableColumnOptions(SupplierMetadata)),
      provideInputOptions(toFormInputOptions(SupplierMetadata)),
      provideFormGroup(SupplierFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
