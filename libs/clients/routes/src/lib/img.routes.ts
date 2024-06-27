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
import { ImgMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  ImgFormGroup,
  UpdateImgFormGroup,
} from '@webpackages/clients/form-groups';
import { ImgService } from '@webpackages/clients/ngrx';
import { buildCrudRoutes } from './__crud.routes';

export const ImgRoutes: Routes = [
  {
    path: '',
    title: 'Img',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Img', icon: 'table' },
        { route: ['editor'], label: 'New Img', icon: 'add' },
      ]),
      provideEntityCollectionService(ImgService),
      provideTableColumnOptions(toTableColumnOptions(ImgMetadata)),
      provideInputOptions(toFormInputOptions(ImgMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(ImgMetadata)),
      provideFormGroup(ImgFormGroup),
      provideUpdateFormGroup(UpdateImgFormGroup),
    ],
    loadChildren() {
      return buildCrudRoutes('Img');
    },
  },
];
