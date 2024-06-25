import { Injectable } from '@angular/core';
import { ISale } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SaleService extends EntityCollectionServiceBase<ISale> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sale', factory);
  }
}
