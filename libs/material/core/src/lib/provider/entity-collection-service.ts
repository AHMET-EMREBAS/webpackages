import { EntityCollectionServiceBase } from '@ngrx/data';
import { createClassProvider } from './create-provider';
import { MockEntityCollectionService } from '../mock';

export const {
  provide: provideEntityCollectionService,
  token: getEntityCollectionServiceToken,
} = createClassProvider<EntityCollectionServiceBase<any>>(
  'EntityCollectionService',
  MockEntityCollectionService
);
