import { Metadata } from '@webpackages/types';

export const PriceMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    price: { type: 'number', required: true, minimum: 0, moreThan: 'cost' },
    cost: { type: 'number', required: true, minimum: 0 },
    startDate: { type: 'date', required: true },
    endDate: { type: 'date', required: true, moreThan: 'startDate' },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
    priceLevel: { relationType: 'owner', targetName: 'PriceLevel' },
  },
};
