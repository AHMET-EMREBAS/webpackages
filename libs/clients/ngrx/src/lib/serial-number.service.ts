import { Injectable } from '@angular/core';
import { ISerialNumber } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SerialNumberService extends EntityCollectionServiceBase<ISerialNumber> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('SerialNumber', factory);
  }
}
