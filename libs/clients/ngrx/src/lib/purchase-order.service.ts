import { Injectable } from '@angular/core';
import { IPurchaseOrder } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PurchaseOrderService extends EntityCollectionServiceBase<IPurchaseOrder> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('PurchaseOrder', factory);
  }
}
