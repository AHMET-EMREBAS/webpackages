import { Injectable } from '@angular/core';
import { IDiscount } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class DiscountService extends EntityCollectionServiceBase<IDiscount> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Discount', factory);
  }
}
