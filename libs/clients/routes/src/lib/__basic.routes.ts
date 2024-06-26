import { Type } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes } from '@angular/router';
import { EntityCollectionServiceBase } from '@ngrx/data';
import {
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideSubModuleNavListItems,
  provideTableColumnOptions,
} from '@webpackages/material/core';
import { CategoryMetadata } from '@webpackages/metadata';
import { toFormInputOptions, toTableColumnOptions } from '@webpackages/types';
import { CrudRoutes } from './__crud.routes';
import { names } from '@webpackages/utils';

export function createRoutes(
  service: Type<EntityCollectionServiceBase<unknown>>,
  resourceName: string
): Routes {
  const N = names(resourceName);

  return [
    {
      path: '',
      title: N.titleName,
      providers: [
        provideSubModuleNavListItems([
          { route: ['table'], label: `View ${N.titleName}`, icon: 'table' },
          { route: ['editor'], label: `New ${N.titleName}`, icon: 'add' },
        ]),
        provideEntityCollectionService(service),
        provideTableColumnOptions(toTableColumnOptions(CategoryMetadata)),
        provideInputOptions(toFormInputOptions(CategoryMetadata)),
        provideFormGroup(
          new FormGroup({
            name: new FormControl(null, [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100),
            ]),
          })
        ),

      ],
      loadChildren() {
        return CrudRoutes;
      },
    },
  ];
}
