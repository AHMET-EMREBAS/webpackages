import { Injectable } from '@angular/core';
import { IEmail } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class EmailService extends EntityCollectionServiceBase<IEmail> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Email', factory);
  }
}
