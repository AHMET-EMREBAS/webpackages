import { Injectable } from '@angular/core';
import { IPurchase } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PurchaseService extends EntityCollectionServiceBase<IPurchase> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Purchase', factory);
  }
}
