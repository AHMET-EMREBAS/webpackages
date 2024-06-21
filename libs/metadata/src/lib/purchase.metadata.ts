import { Metadata } from '@webpackages/types';

export const PurchaseMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    orderDate: { type: 'date', required: true },
    expectedShippingDate: { type: 'date', required: true },
    shippingDate: { type: 'date' },
    subTotal: { type: 'number', required: true },
    total: { type: 'number', required: true },
    notes: { type: 'string', inputType: 'textarea' },
  },
  relations: {
    user: { relationType: 'owner', targetName: 'User' },
  },
};
