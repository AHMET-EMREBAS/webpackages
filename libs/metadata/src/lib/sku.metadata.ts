import { Metadata } from '@webpackages/types';

export const SkuMetadata: Metadata = {
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
    sku: {
      type: 'string',
      required: true,
      format: 'barcode',
    },
  },
  relations: {
    product: { relationType: 'owner', targetName: 'Product' },
  },
};
