import { Injectable } from '@angular/core';
import { IAddress } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class AddressService extends EntityCollectionServiceBase<IAddress> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Address', factory);
  }
}
