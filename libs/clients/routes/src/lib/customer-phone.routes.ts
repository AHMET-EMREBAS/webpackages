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
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerPhoneFormGroup,
  UpdateCustomerPhoneFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerPhoneRoutes: Routes = [
  {
    path: '',
    title: 'CustomerPhone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerPhone', icon: 'table' },
        { route: ['editor'], label: 'New CustomerPhone', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerPhoneService),
      provideTableColumnOptions(toTableColumnOptions(CustomerPhoneMetadata)),
      provideInputOptions(toFormInputOptions(CustomerPhoneMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(CustomerPhoneMetadata)
      ),
      provideFormGroup(CustomerPhoneFormGroup()),
      provideUpdateFormGroup(UpdateCustomerPhoneFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('CustomerPhone');
    },
  },
];
