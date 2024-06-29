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
import { CustomerAccountMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerAccountFormGroup,
  CustomerAccountUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerAccountRoutes: Routes = [
  {
    path: '',
    title: 'CustomerAccount',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerAccount', icon: 'table' },
        { route: ['editor'], label: 'New CustomerAccount', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerAccountService),
      provideTableColumnOptions(toTableColumnOptions(CustomerAccountMetadata)),
      provideInputOptions(toFormInputOptions(CustomerAccountMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(CustomerAccountMetadata)
      ),
      provideFormGroup(CustomerAccountFormGroup()),
      provideUpdateFormGroup(CustomerAccountUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('CustomerAccount');
    },
  },
];
