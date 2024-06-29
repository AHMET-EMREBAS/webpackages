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
import { AppEventMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  AppEventFormGroup,
  AppEventUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { AppEventService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const AppEventRoutes: Routes = [
  {
    path: '',
    title: 'AppEvent',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View AppEvent', icon: 'table' },
        { route: ['editor'], label: 'New AppEvent', icon: 'add' },
      ]),
      provideEntityCollectionService(AppEventService),
      provideTableColumnOptions(toTableColumnOptions(AppEventMetadata)),
      provideInputOptions(toFormInputOptions(AppEventMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(AppEventMetadata)),
      provideFormGroup(AppEventFormGroup()),
      provideUpdateFormGroup(AppEventUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('AppEvent');
    },
  },
];
