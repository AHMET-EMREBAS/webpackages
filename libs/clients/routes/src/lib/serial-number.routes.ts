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
import { SerialNumberMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  SerialNumberFormGroup,
  UpdateSerialNumberFormGroup,
} from '@webpackages/clients/form-groups';
import { SerialNumberService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const SerialNumberRoutes: Routes = [
  {
    path: '',
    title: 'SerialNumber',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View SerialNumber', icon: 'table' },
        { route: ['editor'], label: 'New SerialNumber', icon: 'add' },
      ]),
      provideEntityCollectionService(SerialNumberService),
      provideTableColumnOptions(toTableColumnOptions(SerialNumberMetadata)),
      provideInputOptions(toFormInputOptions(SerialNumberMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(SerialNumberMetadata)),
      provideFormGroup(SerialNumberFormGroup),
      provideUpdateFormGroup(UpdateSerialNumberFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
