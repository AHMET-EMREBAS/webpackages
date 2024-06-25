import { Injectable } from '@angular/core';
import { IProject } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProjectService extends EntityCollectionServiceBase<IProject> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Project', factory);
  }
}
