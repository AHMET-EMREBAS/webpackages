import { Routes } from '@angular/router';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ImgMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { ImgFormGroup } from '@webpackages/clients/form-groups';
import { ImgService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const ImgRoutes: Routes = [
  {
    path: '',
    title: 'Img',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Imgs', icon: 'table' },
        { route: ['editor'], label: 'New Img', icon: 'add' },
      ]),
      provideEntityCollectionService(ImgService),
      provideTableColumnOptions(toTableColumnOptions(ImgMetadata)),
      provideInputOptions(toFormInputOptions(ImgMetadata)),
      provideFormGroup(ImgFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
