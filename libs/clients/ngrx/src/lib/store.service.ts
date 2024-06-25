import { Injectable } from '@angular/core';
import { IStore } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class StoreService extends EntityCollectionServiceBase<IStore> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Store', factory);
  }
}
