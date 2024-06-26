import { Metadata } from '@webpackages/types';

export const DiscountMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      label: 'Discount Name',
      required: true,
      minLength: 3,
      maxLength: 100,
      example: 'April Discount',
    },
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
      resourceLabelProperty: 'name',
      update: false,
    },
    priceLevel: {
      relationType: 'owner',
      targetName: 'PriceLevel',
      viewColumns: ['name', 'currency', 'taxrate'],
      resourceLabelProperty: 'name',
      update: false,
    },
  },
};
