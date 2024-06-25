import { Injectable } from '@angular/core';
import { IQuantity } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class QuantityService extends EntityCollectionServiceBase<IQuantity> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Quantity', factory);
  }
}
