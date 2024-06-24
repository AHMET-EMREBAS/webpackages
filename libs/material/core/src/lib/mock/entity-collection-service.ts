import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

export class Sample {
  id: number;
  name: string;
}

@Injectable()
export class MockEntityCollectionService extends EntityCollectionServiceBase<Sample> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sample', factory);
  }
}
