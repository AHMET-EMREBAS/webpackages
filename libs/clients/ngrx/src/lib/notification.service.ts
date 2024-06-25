import { Injectable } from '@angular/core';
import { INotification } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class NotificationService extends EntityCollectionServiceBase<INotification> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Notification', factory);
  }
}
