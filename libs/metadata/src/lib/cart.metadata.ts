import { Metadata } from '@webpackages/types';

export const CartMetadata: Metadata = {
  groupName: 'pos',
  properties: {
    complete: { type: 'boolean', example: false },
  },
  relations: {
    customer: {
      relationType: 'owner',
      targetName: 'Customer',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      update: false,
    },
    employee: {
      relationType: 'owner',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      update: false,
    },
  },
};
