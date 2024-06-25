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
import { IProduct } from '@webpackages/models';
import { ProductMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CrudRoutes } from './crud.routes';

@Injectable()
export class ProductService extends EntityCollectionServiceBase<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}

export const ProductRoutes: Routes = [
  {
    path: '',
    title: 'Product',
    providers: [
      provideSubModuleNavListItems([
        { route: ['table'], label: 'View Producs', icon: 'table' },
        { route: ['editor'], label: 'New Product', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions(toTableColumnOptions(ProductMetadata)),
      provideInputOptions(toFormInputOptions(ProductMetadata)),
      provideFormGroup(
        new FormGroup({
          name: new FormControl(null, [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
          description: new FormControl(null, [Validators.maxLength(1000)]),
          upc: new FormControl(null, [
            Validators.required,
            Validators.maxLength(13),
            Validators.minLength(8),
          ]),
          category: new FormControl(null, [Validators.required]),
          supplier: new FormControl(null, []),
        })
      ),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
