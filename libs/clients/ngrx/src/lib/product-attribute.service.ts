import { Injectable } from '@angular/core';
import { IProductAttribute } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProductAttributeService extends EntityCollectionServiceBase<IProductAttribute> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('ProductAttribute', factory);
  }
}
