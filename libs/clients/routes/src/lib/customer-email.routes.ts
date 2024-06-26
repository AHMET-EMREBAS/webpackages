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
import { CustomerEmailMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerEmailFormGroup,
  UpdateCustomerEmailFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerEmailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerEmailRoutes: Routes = [
  {
    path: '',
    title: 'CustomerEmail',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerEmail', icon: 'table' },
        { route: ['editor'], label: 'New CustomerEmail', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerEmailService),
      provideTableColumnOptions(toTableColumnOptions(CustomerEmailMetadata)),
      provideInputOptions(toFormInputOptions(CustomerEmailMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(CustomerEmailMetadata)
      ),
      provideFormGroup(CustomerEmailFormGroup),
      provideUpdateFormGroup(UpdateCustomerEmailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
