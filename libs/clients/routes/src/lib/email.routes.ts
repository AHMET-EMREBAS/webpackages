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
import { EmailMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  EmailFormGroup,
  UpdateEmailFormGroup,
} from '@webpackages/clients/form-groups';
import { EmailService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const EmailRoutes: Routes = [
  {
    path: '',
    title: 'Email',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Email', icon: 'table' },
        { route: ['editor'], label: 'New Email', icon: 'add' },
      ]),
      provideEntityCollectionService(EmailService),
      provideTableColumnOptions(toTableColumnOptions(EmailMetadata)),
      provideInputOptions(toFormInputOptions(EmailMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(EmailMetadata)),
      provideFormGroup(EmailFormGroup),
      provideUpdateFormGroup(UpdateEmailFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
