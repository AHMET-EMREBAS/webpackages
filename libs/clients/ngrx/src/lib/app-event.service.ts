import { Injectable } from '@angular/core';
import { IAppEvent } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class AppEventService extends EntityCollectionServiceBase<IAppEvent> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('AppEvent', factory);
  }
}
