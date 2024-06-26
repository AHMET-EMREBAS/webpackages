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
      resourceLabelProperty: 'name',
      update: false,
    },
    cart: {
      relationType: 'owner',
      targetName: 'Cart',
      resourceLabelProperty: 'id',
      update: false,
    },
    discount: {
      relationType: 'one',
      targetName: 'Discount',
      viewColumns: ['fixedDiscount', 'percentDiscount'],
      resourceLabelProperty: 'name',
    },
  },
};
