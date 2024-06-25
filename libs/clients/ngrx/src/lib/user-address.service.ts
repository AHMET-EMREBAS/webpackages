import { Injectable } from '@angular/core';
import { IUserAddress } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserAddressService extends EntityCollectionServiceBase<IUserAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserAddress', factory);
  }
}
