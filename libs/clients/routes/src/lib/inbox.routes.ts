import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { InboxMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { InboxFormGroup } from '@webpackages/clients/form-groups';
import { InboxService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const InboxRoutes: Routes = [
  {
    path: '',
    title: 'Inbox',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Inboxs', icon: 'table' },
        { route: ['editor'], label: 'New Inbox', icon: 'add' },
      ]),
      provideEntityCollectionService(InboxService),
      provideTableColumnOptions(toTableColumnOptions(InboxMetadata)),
      provideInputOptions(toFormInputOptions(InboxMetadata)),
      provideFormGroup(InboxFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
