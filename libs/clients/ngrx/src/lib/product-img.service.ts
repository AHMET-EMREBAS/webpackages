import { Injectable } from '@angular/core';
import { IProductImg } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProductImgService extends EntityCollectionServiceBase<IProductImg> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('ProductImg', factory);
  }
}
