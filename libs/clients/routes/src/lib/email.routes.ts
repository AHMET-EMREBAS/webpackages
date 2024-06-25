import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { EmailMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { EmailFormGroup } from '@webpackages/clients/form-groups';
import { EmailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const EmailRoutes: Routes = [
  {
    path: '',
    title: 'Email',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Emails', icon: 'table' },
        { route: ['editor'], label: 'New Email', icon: 'add' },
      ]),
      provideEntityCollectionService(EmailService),
      provideTableColumnOptions(toTableColumnOptions(EmailMetadata)),
      provideInputOptions(toFormInputOptions(EmailMetadata)),
      provideFormGroup(EmailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
