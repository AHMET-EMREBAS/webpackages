import { Injectable } from '@angular/core';
import { IUserPhone } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserPhoneService extends EntityCollectionServiceBase<IUserPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserPhone', factory);
  }
}
