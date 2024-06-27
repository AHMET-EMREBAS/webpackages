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
import { PhoneMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  PhoneFormGroup,
  UpdatePhoneFormGroup,
} from '@webpackages/clients/form-groups';
import { PhoneService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const PhoneRoutes: Routes = [
  {
    path: '',
    title: 'Phone',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Phone', icon: 'table' },
        { route: ['editor'], label: 'New Phone', icon: 'add' },
      ]),
      provideEntityCollectionService(PhoneService),
      provideTableColumnOptions(toTableColumnOptions(PhoneMetadata)),
      provideInputOptions(toFormInputOptions(PhoneMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(PhoneMetadata)),
      provideFormGroup(PhoneFormGroup),
      provideUpdateFormGroup(UpdatePhoneFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Phone');
    },
  },
];
