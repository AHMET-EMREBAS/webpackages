import { Injectable } from '@angular/core';
import { ISku } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SkuService extends EntityCollectionServiceBase<ISku> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sku', factory);
  }
}
