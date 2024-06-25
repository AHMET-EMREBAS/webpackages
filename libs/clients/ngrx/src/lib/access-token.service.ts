import { Injectable } from '@angular/core';
import { IAccessToken } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class AccessTokenService extends EntityCollectionServiceBase<IAccessToken> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('AccessToken', factory);
  }
}
