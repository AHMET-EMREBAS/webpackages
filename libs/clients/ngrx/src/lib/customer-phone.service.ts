import { Injectable } from '@angular/core';
import { ICustomerPhone } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerPhoneService extends EntityCollectionServiceBase<ICustomerPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerPhone', factory);
  }
}
