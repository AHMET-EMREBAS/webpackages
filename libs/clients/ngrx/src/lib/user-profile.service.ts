import { Injectable } from '@angular/core';
import { IUserProfile } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserProfileService extends EntityCollectionServiceBase<IUserProfile> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserProfile', factory);
  }
}
