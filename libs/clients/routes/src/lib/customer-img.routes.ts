import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CustomerImgMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CustomerImgFormGroup } from '@webpackages/clients/form-groups';
import { CustomerImgService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const CustomerImgRoutes: Routes = [
  {
    path: '',
    title: 'CustomerImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View CustomerImgs', icon: 'table' },
        { route: ['editor'], label: 'New CustomerImg', icon: 'add' },
      ]),
      provideEntityCollectionService(CustomerImgService),
      provideTableColumnOptions(toTableColumnOptions(CustomerImgMetadata)),
      provideInputOptions(toFormInputOptions(CustomerImgMetadata)),
      provideFormGroup(CustomerImgFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
