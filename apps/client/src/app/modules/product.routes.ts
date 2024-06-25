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
import { ProductFormGroup } from '@webpackages/clients/form-groups';

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
        { route: ['table'], label: 'View Products', icon: 'table' },
        { route: ['editor'], label: 'New Product', icon: 'add' },
      ]),
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions(toTableColumnOptions(ProductMetadata)),
      provideInputOptions(toFormInputOptions(ProductMetadata)),
      provideFormGroup(ProductFormGroup),
    ],
    loadChildren() {
      return CrudRoutes;
    },
  },
];
