import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { UserImgMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { UserImgFormGroup } from '@webpackages/clients/form-groups';
import { UserImgService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const UserImgRoutes: Routes = [
  {
    path: '',
    title: 'UserImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserImgs', icon: 'table' },
        { route: ['editor'], label: 'New UserImg', icon: 'add' },
      ]),
      provideEntityCollectionService(UserImgService),
      provideTableColumnOptions(toTableColumnOptions(UserImgMetadata)),
      provideInputOptions(toFormInputOptions(UserImgMetadata)),
      provideFormGroup(UserImgFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
