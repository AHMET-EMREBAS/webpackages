import { Metadata } from '@webpackages/types';

export const ProductMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
    },
    description: {
      type: 'string',
      maxLength: 1000,
    },
    upc: {
      type: 'string',
      required: true,
      unique: true,
      format: 'barcode',
    },
  },
  relations: {
    category: { relationType: 'one', targetName: 'Category' },
    supplier: { relationType: 'one', targetName: 'Supplier' },
  },
};
