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
import { CustomerAddressMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerAddressFormGroup,
  UpdateCustomerAddressFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerAddressRoutes: Routes = [
  {
    path: '',
    title: 'CustomerAddress',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerAddress', icon: 'table' },
        { route: ['editor'], label: 'New CustomerAddress', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerAddressService),
      provideTableColumnOptions(toTableColumnOptions(CustomerAddressMetadata)),
      provideInputOptions(toFormInputOptions(CustomerAddressMetadata)),
      provideUpdateInputOptions(
        toUpdateFormInputOptions(CustomerAddressMetadata)
      ),
      provideFormGroup(CustomerAddressFormGroup()),
      provideUpdateFormGroup(UpdateCustomerAddressFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('CustomerAddress');
    },
  },
];
