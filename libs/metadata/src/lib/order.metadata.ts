import { Metadata } from '@webpackages/types';

export const OrderMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    unitPrice: { type: 'number', required: true, minimum: 0 },
    subTotal: { type: 'number', required: true, minimum: 0 },
    quantity: { type: 'number', minimum: 1 },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
    cart: { relationType: 'owner', targetName: 'Cart' },
    discounts: { relationType: 'many', targetName: 'Discount' },
  },
};
