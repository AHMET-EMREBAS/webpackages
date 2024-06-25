import { Injectable } from '@angular/core';
import { IInbox } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class InboxService extends EntityCollectionServiceBase<IInbox> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Inbox', factory);
  }
}
