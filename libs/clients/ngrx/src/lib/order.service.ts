import { Injectable } from '@angular/core';
import { IOrder } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class OrderService extends EntityCollectionServiceBase<IOrder> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Order', factory);
  }
}
