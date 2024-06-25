import { Injectable } from '@angular/core';
import { IPriceLevel } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PriceLevelService extends EntityCollectionServiceBase<IPriceLevel> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PriceLevel', factory);
  }
}
