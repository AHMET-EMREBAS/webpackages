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
import { CustomerImgMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  CustomerImgFormGroup,
  CustomerImgUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const CustomerImgRoutes: Routes = [
  {
    path: '',
    title: 'CustomerImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerImg', icon: 'table' },
        { route: ['editor'], label: 'New CustomerImg', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerImgService),
      provideTableColumnOptions(toTableColumnOptions(CustomerImgMetadata)),
      provideInputOptions(toFormInputOptions(CustomerImgMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(CustomerImgMetadata)),
      provideFormGroup(CustomerImgFormGroup()),
      provideUpdateFormGroup(CustomerImgUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('CustomerImg');
    },
  },
];
