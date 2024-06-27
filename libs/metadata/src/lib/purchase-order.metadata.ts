import { Metadata } from '@webpackages/types';

export const PurchaseOrderMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    price: { type: 'number', required: true, example: 9.9 },
    quantity: {
      type: 'number',
      isInt: true,
      required: true,
      minimum: 1,
      example: 30,
    },
    subTotal: { type: 'number', required: true, minimum: 0, example: 30 * 9.9 },
    total: { type: 'number', required: true, minimum: 0, example: 30 * 9.9 },
  },
  relations: {
    purchase: {
      relationType: 'owner',
      targetName: 'Purchase',
      update: false,
    },
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['sku', 'name'],
      update: false,
    },
  },
};
