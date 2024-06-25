import { Injectable } from '@angular/core';
import { IMessage } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class MessageService extends EntityCollectionServiceBase<IMessage> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Message', factory);
  }
}
