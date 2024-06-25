import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerEmailMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerEmailFormGroup } from '@webpackages/clients/form-groups';
import { CustomerEmailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerEmailRoutes: Routes = [
  {
    path: '',
    title: 'CustomerEmail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerEmails', icon: 'table' },
        { route: ['editor'], label: 'New CustomerEmail', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerEmailService),
      provideTableColumnOptions(toTableColumnOptions(CustomerEmailMetadata)),
      provideInputOptions(toFormInputOptions(CustomerEmailMetadata)),
      provideFormGroup(CustomerEmailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
