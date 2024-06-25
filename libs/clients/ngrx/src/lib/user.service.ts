import { Injectable } from '@angular/core';
import { IUser } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserService extends EntityCollectionServiceBase<IUser> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('User', factory);
  }
}
