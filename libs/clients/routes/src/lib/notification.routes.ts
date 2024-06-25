import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { NotificationMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { NotificationFormGroup } from '@webpackages/clients/form-groups';
import { NotificationService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const NotificationRoutes: Routes = [
  {
    path: '',
    title: 'Notification',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Notifications', icon: 'table' },
        { route: ['editor'], label: 'New Notification', icon: 'add' },
      ]),
      provideEntityCollectionService(NotificationService),
      provideTableColumnOptions(toTableColumnOptions(NotificationMetadata)),
      provideInputOptions(toFormInputOptions(NotificationMetadata)),
      provideFormGroup(NotificationFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
