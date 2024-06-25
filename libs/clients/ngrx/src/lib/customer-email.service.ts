import { Injectable } from '@angular/core';
import { ICustomerEmail } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerEmailService extends EntityCollectionServiceBase<ICustomerEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerEmail', factory);
  }
}
