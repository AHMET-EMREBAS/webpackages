import { Injectable } from '@angular/core';
import { ICustomerAccount } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerAccountService extends EntityCollectionServiceBase<ICustomerAccount> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerAccount', factory);
  }
}
