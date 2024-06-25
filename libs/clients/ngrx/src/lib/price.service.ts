import { Injectable } from '@angular/core';
import { IPrice } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PriceService extends EntityCollectionServiceBase<IPrice> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Price', factory);
  }
}
