import { Injectable } from '@angular/core';
import { ISprint } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SprintService extends EntityCollectionServiceBase<ISprint> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sprint', factory);
  }
}
