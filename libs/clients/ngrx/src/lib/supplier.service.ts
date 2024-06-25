import { Injectable } from '@angular/core';
import { ISupplier } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class SupplierService extends EntityCollectionServiceBase<ISupplier> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Supplier', factory);
  }
}
