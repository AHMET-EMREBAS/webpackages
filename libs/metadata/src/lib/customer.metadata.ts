import { Metadata } from '@webpackages/types';
import { UserMetadata } from './user.metadata';

export const CustomerMetadata: Metadata = {
  groupName: 'customer-management',
  properties: UserMetadata.properties,
  relations: {
    priceLevel: {
      relationType: 'one',
      targetName: 'PriceLevel',
      viewColumns: ['name'],
      
      resourceLabelProperty: 'name',
    },
  },
};
