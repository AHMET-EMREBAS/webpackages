import { Metadata } from '@webpackages/types';

export const SkuDetailMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    color: { type: 'string', maxLength: 100, example: 'white' },
    height: { type: 'string', maxLength: 100, example: '60in' },
    width: { type: 'string', maxLength: 100, example: '20in' },
    weight: { type: 'string', maxLength: 100, example: '40lb' },
    manual: { type: 'string', format: 'url', example: 'https://youtube.com' },
    make: { type: 'string', maxLength: 100, example: 'apple' },
    model: { type: 'string', maxLength: 100, example: '2024' },
    notes: {
      type: 'string',
      maxLength: 1000,
      example: 'Add some notes about the product',
    },
    website: { type: 'string', format: 'url', example: 'https://youtube.com' },
    manufacturer: {
      type: 'string',
      maxLength: 100,
      example: 'GH Hub Fast Production',
    },
    highlight: {
      type: 'string',
      maxLength: 100,
      example: 'The product highlights, hot features',
    },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['sku', 'name'],
      resourceLabelProperty: 'username',
    },
  },
};
