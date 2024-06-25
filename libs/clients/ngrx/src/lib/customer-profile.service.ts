import { Injectable } from '@angular/core';
import { ICustomerProfile } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerProfileService extends EntityCollectionServiceBase<ICustomerProfile> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerProfile', factory);
  }
}
