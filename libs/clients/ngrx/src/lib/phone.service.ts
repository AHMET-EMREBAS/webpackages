import { Injectable } from '@angular/core';
import { IPhone } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class PhoneService extends EntityCollectionServiceBase<IPhone> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Phone', factory);
  }
}
