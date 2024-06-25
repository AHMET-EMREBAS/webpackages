import { Injectable } from '@angular/core';
import { ICustomerImg } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class CustomerImgService extends EntityCollectionServiceBase<ICustomerImg> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('CustomerImg', factory);
  }
}
