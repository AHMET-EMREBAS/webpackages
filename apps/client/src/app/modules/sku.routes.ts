import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { ISku } from '@webpackages/models';
import { SkuMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CrudRoutes } from './crud.routes';

@Injectable()
export class SkuService extends EntityCollectionServiceBase<ISku> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sku', factory);
  }
}

export const SkuRoutes: Routes = [
  {
    path: '',
    title: 'Sku',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Skus', icon: 'table' },
        { route: ['editor'], label: 'New Sku', icon: 'add' },
      ]),
      provideEntityCollectionService(SkuService),
      provideTableColumnOptions(toTableColumnOptions(SkuMetadata)),
      provideInputOptions(toFormInputOptions(SkuMetadata)),
      provideFormGroup(
        new FormGroup({
          name: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
          description: new FormControl(null, [Validators.maxLength(1000)]),
          sku: new FormControl(null, [
            Validators.required,
            Validators.maxLength(13),
            Validators.minLength(8),
          ]),
          product: new FormControl(null, [Validators.required]),
        })
      ),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
