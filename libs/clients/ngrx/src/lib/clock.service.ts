import { Injectable } from '@angular/core';
import { IClock } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ClockService extends EntityCollectionServiceBase<IClock> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Clock', factory);
  }
}
