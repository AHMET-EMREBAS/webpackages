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
import { CustomerMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerFormGroup,
  UpdateCustomerFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerRoutes: Routes = [
  {
    path: '',
    title: 'Customer',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Customer', icon: 'table' },
        { route: ['editor'], label: 'New Customer', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerService),
      provideTableColumnOptions(toTableColumnOptions(CustomerMetadata)),
      provideInputOptions(toFormInputOptions(CustomerMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(CustomerMetadata)),
      provideFormGroup(CustomerFormGroup),
      provideUpdateFormGroup(UpdateCustomerFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Customer');
    },
  },
];
