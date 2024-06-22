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
      description: 'Unique product sku name',
      example: 'Unique SKU Namem - SK-1 Product name',
    },
    description: {
      type: 'string',
      maxLength: 1000,
      description: 'Sku description',
      example: 'Sku Description',
    },
    sku: {
      type: 'string',
      required: true,
      description: 'Unique sku code',
      format: 'barcode',
    },
  },
  relations: {
    product: {
      relationType: 'owner',
      targetName: 'Product',
      viewColumns: ['upc'],
    },
  },
};
