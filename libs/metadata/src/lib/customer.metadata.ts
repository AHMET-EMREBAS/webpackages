import { Metadata } from '@webpackages/types';
import { UserMetadata } from './user.metadata';

export const CustomerMetadata: Metadata = {
  groupName: 'administation',
  properties: UserMetadata.properties,
  relations: {
    priceLevel: { relationType: 'one', targetName: 'PriceLevel' },
  },
};
