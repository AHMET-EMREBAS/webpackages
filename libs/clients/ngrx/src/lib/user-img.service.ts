import { Injectable } from '@angular/core';
import { IUserImg } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class UserImgService extends EntityCollectionServiceBase<IUserImg> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('UserImg', factory);
  }
}
