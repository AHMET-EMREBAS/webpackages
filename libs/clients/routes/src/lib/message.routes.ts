import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { MessageMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { MessageFormGroup } from '@webpackages/clients/form-groups';
import { MessageService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const MessageRoutes: Routes = [
  {
    path: '',
    title: 'Message',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Messages', icon: 'table' },
        { route: ['editor'], label: 'New Message', icon: 'add' },
      ]),
      provideEntityCollectionService(MessageService),
      provideTableColumnOptions(toTableColumnOptions(MessageMetadata)),
      provideInputOptions(toFormInputOptions(MessageMetadata)),
      provideFormGroup(MessageFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
