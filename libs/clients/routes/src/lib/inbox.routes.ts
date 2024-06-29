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
import { InboxMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  InboxFormGroup,
  UpdateInboxFormGroup,
} from '@webpackages/clients/form-groups';
import { InboxService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const InboxRoutes: Routes = [
  {
    path: '',
    title: 'Inbox',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Inbox', icon: 'table' },
        { route: ['editor'], label: 'New Inbox', icon: 'add' },
      ]),
      provideEntityCollectionService(InboxService),
      provideTableColumnOptions(toTableColumnOptions(InboxMetadata)),
      provideInputOptions(toFormInputOptions(InboxMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(InboxMetadata)),
      provideFormGroup(InboxFormGroup()),
      provideUpdateFormGroup(UpdateInboxFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Inbox');
    },
  },
];
