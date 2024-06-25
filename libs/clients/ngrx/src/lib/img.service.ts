import { Injectable } from '@angular/core';
import { IImg } from '@webpackages/models';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ImgService extends EntityCollectionServiceBase<IImg> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Img', factory);
  }
}
