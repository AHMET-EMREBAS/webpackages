import { Injectable } from '@angular/core';
import { ITask } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class TaskService extends EntityCollectionServiceBase<ITask> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Task', factory);
  }
}
