import { Injectable } from '@angular/core';
import { ICart } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CartService extends EntityCollectionServiceBase<ICart> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Cart', factory);
  }
}
