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
import { UserImgMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  UserImgFormGroup,
  UpdateUserImgFormGroup,
} from '@webpackages/clients/form-groups';
import { UserImgService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const UserImgRoutes: Routes = [
  {
    path: '',
    title: 'UserImg',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View UserImg', icon: 'table' },
        { route: ['editor'], label: 'New UserImg', icon: 'add' },
      ]),
      provideEntityCollectionService(UserImgService),
      provideTableColumnOptions(toTableColumnOptions(UserImgMetadata)),
      provideInputOptions(toFormInputOptions(UserImgMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(UserImgMetadata)),
      provideFormGroup(UserImgFormGroup()),
      provideUpdateFormGroup(UpdateUserImgFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('UserImg');
    },
  },
];
