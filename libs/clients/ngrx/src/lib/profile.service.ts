import { Injectable } from '@angular/core';
import { IProfile } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProfileService extends EntityCollectionServiceBase<IProfile> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Profile', factory);
  }
}
