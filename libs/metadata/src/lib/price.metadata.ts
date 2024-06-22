import { Metadata } from '@webpackages/types';

export const PriceMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    price: {
      type: 'number',
      required: true,
      minimum: 0,
      moreThan: 'cost',
      example: 10.99,
    },
    cost: { type: 'number', required: true, minimum: 0, example: 4.99 },
    startDate: {
      type: 'date',
      required: true,
      example: new Date().toLocaleDateString(),
    },
    endDate: {
      type: 'date',
      required: true,
      moreThan: 'startDate',
      example: new Date('10-20-2030').toLocaleDateString(),
    },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
    priceLevel: { relationType: 'owner', targetName: 'PriceLevel' },
  },
};
