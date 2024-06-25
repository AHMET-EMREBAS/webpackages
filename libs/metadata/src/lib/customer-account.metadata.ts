import { Metadata } from '@webpackages/types';

export const CustomerAccountMetadata: Metadata = {
  groupName: 'customer-management',
  properties: {
    blance: {
      type: 'number',
      required: true,
      description: 'Sale subtotal',
      example: 400,
    },
  },
  relations: {
    user: {
      relationType: 'owner',
      targetName: 'Customer',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
    },
    priceLevel: {
      relationType: 'one',
      targetName: 'PriceLevel',
      viewColumns: ['name', 'taxrate', 'currency'],
      resourceLabelProperty: 'name',
    },
  },
};
