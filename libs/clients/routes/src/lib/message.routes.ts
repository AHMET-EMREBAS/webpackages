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
import { MessageMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  MessageFormGroup,
  MessageUpdateFormGroup,
} from '@webpackages/clients/form-groups';
import { MessageService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const MessageRoutes: Routes = [
  {
    path: '',
    title: 'Message',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Message', icon: 'table' },
        { route: ['editor'], label: 'New Message', icon: 'add' },
      ]),
      provideEntityCollectionService(MessageService),
      provideTableColumnOptions(toTableColumnOptions(MessageMetadata)),
      provideInputOptions(toFormInputOptions(MessageMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(MessageMetadata)),
      provideFormGroup(MessageFormGroup()),
      provideUpdateFormGroup(MessageUpdateFormGroup()),
    ],
    loadChildren() {
      return buildCrudRoutes('Message');
    },
  },
];
