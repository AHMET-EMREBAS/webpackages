import { Injectable } from '@angular/core';
import { IOrganization } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class OrganizationService extends EntityCollectionServiceBase<IOrganization> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Organization', factory);
  }
}
