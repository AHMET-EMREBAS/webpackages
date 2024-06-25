import { Injectable } from '@angular/core';
import { ISkuDetail } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SkuDetailService extends EntityCollectionServiceBase<ISkuDetail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SkuDetail', factory);
  }
}
