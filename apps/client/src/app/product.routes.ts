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
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { FormComponent } from '@webpackages/material/form';
import { TableComponent } from '@webpackages/material/table';
import { IProduct } from '@webpackages/models';
import { ProductMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';

@Injectable()
export class ProductService extends EntityCollectionServiceBase<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}

export const ___ProductRoutes: Routes = [
  {
    path: 'editor',
    loadComponent() {
      return FormComponent;
    },
  },
  {
    path: 'editor/:id',
    loadComponent() {
      return FormComponent;
    },
  },
  {
    path: 'table',
    loadComponent() {
      return TableComponent;
    },
  },
];

export const ProductRoutes: Routes = [
  {
    path: '',
    loadChildren() {
      return ___ProductRoutes;
    },
    providers: [
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
  },
];
