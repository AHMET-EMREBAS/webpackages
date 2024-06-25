import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerFormGroup } from '@webpackages/clients/form-groups';
import { CustomerService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerRoutes: Routes = [
  {
    path: '',
    title: 'Customer',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Customers', icon: 'table' },
        { route: ['editor'], label: 'New Customer', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerService),
      provideTableColumnOptions(toTableColumnOptions(CustomerMetadata)),
      provideInputOptions(toFormInputOptions(CustomerMetadata)),
      provideFormGroup(CustomerFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
