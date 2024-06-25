import { Injectable } from '@angular/core';
import { ICustomerAddress } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerAddressService extends EntityCollectionServiceBase<ICustomerAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerAddress', factory);
  }
}
