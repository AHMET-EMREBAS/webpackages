import { EntityCollectionServiceBase } from '@ngrx/data';
import { createClassProvider, createValueProvider } from './create-provider';
import { MockEntityCollectionService } from '../mock';

export const {
  provide: provideEntityCollectionService,
  token: getEntityCollectionServiceToken,
} = createClassProvider<EntityCollectionServiceBase<any>>(
  'EntityCollectionService',
  MockEntityCollectionService
);

export const { provide: provideResouceName, token: getResourceNameToken } =
  createValueProvider<string>('ResouceEntityName', 'Unkown');
