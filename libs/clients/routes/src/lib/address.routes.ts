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
import { AddressMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  AddressFormGroup,
  UpdateAddressFormGroup,
} from '@webpackages/clients/form-groups';
import { AddressService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const AddressRoutes: Routes = [
  {
    path: '',
    title: 'Address',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Address', icon: 'table' },
        { route: ['editor'], label: 'New Address', icon: 'add' },
      ]),
      provideEntityCollectionService(AddressService),
      provideTableColumnOptions(toTableColumnOptions(AddressMetadata)),
      provideInputOptions(toFormInputOptions(AddressMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(AddressMetadata)),
      provideFormGroup(AddressFormGroup),
      provideUpdateFormGroup(UpdateAddressFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
