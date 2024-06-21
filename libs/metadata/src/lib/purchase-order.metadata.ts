import { Metadata } from '@webpackages/types';

export const PurchaseOrderMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    price: { type: 'number', required: true },
    quantity: { type: 'number', minimum: 1 },
    subTotal: { type: 'number', minimum: 0 },
    total: { type: 'number', minimum: 0 },
  },
  relations: {
    purchase: { relationType: 'owner', targetName: 'Purchase' },
    sku: { relationType: 'owner', targetName: 'Sku' },
  },
};
