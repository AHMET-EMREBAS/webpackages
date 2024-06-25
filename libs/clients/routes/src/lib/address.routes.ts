import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { AddressMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { AddressFormGroup } from '@webpackages/clients/form-groups';
import { AddressService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const AddressRoutes: Routes = [
  {
    path: '',
    title: 'Address',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Addresss', icon: 'table' },
        { route: ['editor'], label: 'New Address', icon: 'add' },
      ]),
      provideEntityCollectionService(AddressService),
      provideTableColumnOptions(toTableColumnOptions(AddressMetadata)),
      provideInputOptions(toFormInputOptions(AddressMetadata)),
      provideFormGroup(AddressFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
