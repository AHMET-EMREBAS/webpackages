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
import { names } from '@webpackages/utils';
import { toFormInputOptions } from '@webpackages/types';

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
      provideEntityCollectionService(ProductService),
      provideTableColumnOptions([
        ...Object.entries(ProductMetadata.properties || {}).map(
          ([key, value]) => {
            return { name: key, label: value.label || key, ...value };
          }
        ),
        ...Object.entries(ProductMetadata.relations || {})
          .map(([key, value]) => {
            if (value.viewColumns) {
              return value.viewColumns.map((e) => {
                return {
                  name:
                    names(value.targetName).propertyName + names(e).className,
                  label: value.targetName + ' ' + e,
                };
              });
            }
            return null;
          })
          .filter((e) => e)
          .flat(),
      ]),
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
    children: [
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
        path: '',
        loadComponent() {
          return TableComponent;
        },
      },
    ],
  },
];
