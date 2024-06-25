import { Injectable } from '@angular/core';
import { ISession } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SessionService extends EntityCollectionServiceBase<ISession> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Session', factory);
  }
}
