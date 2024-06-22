import { Metadata } from '@webpackages/types';

export const OrderMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    unitPrice: { type: 'number', required: true, minimum: 0 },
    subTotal: { type: 'number', required: true, minimum: 0 },
    quantity: { type: 'number', minimum: 1 },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['sku', 'name'],
    },
    cart: { relationType: 'owner', targetName: 'Cart' },
    discount: {
      relationType: 'one',
      targetName: 'Discount',
      viewColumns: ['fixedDiscount', 'percentDiscount'],
    },
  },
};
