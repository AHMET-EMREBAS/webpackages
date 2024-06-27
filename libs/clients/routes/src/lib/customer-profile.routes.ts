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
import { CustomerProfileMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerProfileFormGroup,
  UpdateCustomerProfileFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerProfileService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerProfileRoutes: Routes = [
  {
    path: '',
    title: 'CustomerProfile',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerProfile', icon: 'table' },
        { route: ['editor'], label: 'New CustomerProfile', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerProfileService),
      provideTableColumnOptions(toTableColumnOptions(CustomerProfileMetadata)),
      provideInputOptions(toFormInputOptions(CustomerProfileMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(CustomerProfileMetadata)
      ),
      provideFormGroup(CustomerProfileFormGroup),
      provideUpdateFormGroup(UpdateCustomerProfileFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('CustomerProfile');
    },
  },
];
