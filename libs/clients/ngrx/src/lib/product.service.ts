import { Injectable } from '@angular/core';
import { IProduct } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProductService extends EntityCollectionServiceBase<IProduct> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Product', factory);
  }
}
