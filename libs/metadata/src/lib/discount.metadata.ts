import { Metadata } from '@webpackages/types';

export const DiscountMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    fixedDiscount: { type: 'number', minimum: 0, example: 40 },
    percentDiscount: { type: 'number', minimum: 0 },
    startDate: {
      type: 'date',
      required: true,
      example: new Date().toLocaleDateString(),
    },
    endDate: {
      type: 'date',
      required: true,
      example: new Date().toLocaleDateString(),
    },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['name', 'sku'],
    },
    priceLevel: {
      relationType: 'owner',
      targetName: 'PriceLevel',
      viewColumns: ['name', 'currency', 'taxrate'],
    },
  },
};
