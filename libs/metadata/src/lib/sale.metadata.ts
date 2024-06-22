import { Metadata } from '@webpackages/types';

export const SaleMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    subTotal: {
      type: 'number',
      required: true,
      description: 'Sale subtotal',
      example: 10.99,
    },
    total: {
      type: 'number',
      required: true,
      description: 'Sale total',
      example: 10.99,
    },
    creditCardPayment: { type: 'number', minimum: 0 },
    cashPayment: { type: 'number', minimum: 0 },
    balancePayment: { type: 'number', minimum: 0 },
    customerId: { type: 'number', minimum: 1 },
    employeeId: { type: 'number', minimum: 1 },
  },
};
