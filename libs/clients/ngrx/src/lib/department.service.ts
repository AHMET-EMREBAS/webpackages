import { Injectable } from '@angular/core';
import { IDepartment } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class DepartmentService extends EntityCollectionServiceBase<IDepartment> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Department', factory);
  }
}
