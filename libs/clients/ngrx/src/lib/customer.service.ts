import { Injectable } from '@angular/core';
import { ICustomer } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerService extends EntityCollectionServiceBase<ICustomer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Customer', factory);
  }
}
