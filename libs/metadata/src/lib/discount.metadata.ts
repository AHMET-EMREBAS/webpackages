import { Metadata } from '@webpackages/types';

export const DiscountMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    fixedDiscount: { type: 'number', minimum: 0 },
    percentDiscount: { type: 'number', minimum: 0 },
    startDate: { type: 'date', required: true },
    endDate: { type: 'date', required: true },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
  },
};
