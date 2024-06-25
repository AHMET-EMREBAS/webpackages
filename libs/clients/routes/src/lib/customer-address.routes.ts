import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerAddressMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerAddressFormGroup } from '@webpackages/clients/form-groups';
import { CustomerAddressService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerAddressRoutes: Routes = [
  {
    path: '',
    title: 'CustomerAddress',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerAddresss', icon: 'table' },
        { route: ['editor'], label: 'New CustomerAddress', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerAddressService),
      provideTableColumnOptions(toTableColumnOptions(CustomerAddressMetadata)),
      provideInputOptions(toFormInputOptions(CustomerAddressMetadata)),
      provideFormGroup(CustomerAddressFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
