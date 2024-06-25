import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerPhoneMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerPhoneFormGroup } from '@webpackages/clients/form-groups';
import { CustomerPhoneService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerPhoneRoutes: Routes = [
  {
    path: '',
    title: 'CustomerPhone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerPhones', icon: 'table' },
        { route: ['editor'], label: 'New CustomerPhone', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerPhoneService),
      provideTableColumnOptions(toTableColumnOptions(CustomerPhoneMetadata)),
      provideInputOptions(toFormInputOptions(CustomerPhoneMetadata)),
      provideFormGroup(CustomerPhoneFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
