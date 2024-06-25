import { Injectable } from '@angular/core';
import { IManufacturer } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ManufacturerService extends EntityCollectionServiceBase<IManufacturer> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Manufacturer', factory);
  }
}
