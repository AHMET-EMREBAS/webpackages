import { Injectable } from '@angular/core';
import { IUserEmail } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserEmailService extends EntityCollectionServiceBase<IUserEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserEmail', factory);
  }
}
