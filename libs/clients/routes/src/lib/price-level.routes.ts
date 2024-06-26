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
import { PriceLevelMetadata } from '@webpackages/metadata';
import {
  toFormInputOptions,
  toTableColumnOptions,
  toUpdateFormInputOptions,
} from '@webpackages/types';
import {
  PriceLevelFormGroup,
  UpdatePriceLevelFormGroup,
} from '@webpackages/clients/form-groups';
import { PriceLevelService } from '@webpackages/clients/ngrx';
import { CrudRoutes } from './__crud.routes';

export const PriceLevelRoutes: Routes = [
  {
    path: '',
    title: 'PriceLevel',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View PriceLevel', icon: 'table' },
        { route: ['editor'], label: 'New PriceLevel', icon: 'add' },
      ]),
      provideEntityCollectionService(PriceLevelService),
      provideTableColumnOptions(toTableColumnOptions(PriceLevelMetadata)),
      provideInputOptions(toFormInputOptions(PriceLevelMetadata)),
      provideUpdateInputOptions(toUpdateFormInputOptions(PriceLevelMetadata)),
      provideFormGroup(PriceLevelFormGroup),
      provideUpdateFormGroup(UpdatePriceLevelFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
