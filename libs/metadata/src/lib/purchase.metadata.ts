import { Metadata } from '@webpackages/types';

export const PurchaseMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    orderDate: {
      type: 'date',
      required: true,
      example: new Date('5-5-2024').toLocaleDateString(),
    },
    expectedShippingDate: {
      type: 'date',
      required: true,
      example: new Date('5-13-2024').toLocaleDateString(),
    },
    shippingDate: {
      type: 'date',
      example: new Date('5-7-2024').toLocaleDateString(),
    },
    subTotal: { type: 'number', required: true, example: 500 },
    total: { type: 'number', required: true, example: 500 },
    notes: {
      type: 'string',
      inputType: 'textarea',
      example: 'Explain the purchase ',
    },
  },
  relations: {
    employee: {
      relationType: 'owner',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      update: false,
    },
  },
};
