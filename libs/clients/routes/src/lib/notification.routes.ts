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
import { NotificationMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  NotificationFormGroup,
  UpdateNotificationFormGroup,
} from '@webpackages/clients/form-groups';
import { NotificationService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const NotificationRoutes: Routes = [
  {
    path: '',
    title: 'Notification',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Notification', icon: 'table' },
        { route: ['editor'], label: 'New Notification', icon: 'add' },
      ]),
      provideEntityCollectionService(NotificationService),
      provideTableColumnOptions(toTableColumnOptions(NotificationMetadata)),
      provideInputOptions(toFormInputOptions(NotificationMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(NotificationMetadata)),
      provideFormGroup(NotificationFormGroup),
      provideUpdateFormGroup(UpdateNotificationFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
