import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerAccountMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerAccountFormGroup } from '@webpackages/clients/form-groups';
import { CustomerAccountService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerAccountRoutes: Routes = [
  {
    path: '',
    title: 'CustomerAccount',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerAccounts', icon: 'table' },
        { route: ['editor'], label: 'New CustomerAccount', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerAccountService),
      provideTableColumnOptions(toTableColumnOptions(CustomerAccountMetadata)),
      provideInputOptions(toFormInputOptions(CustomerAccountMetadata)),
      provideFormGroup(CustomerAccountFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
