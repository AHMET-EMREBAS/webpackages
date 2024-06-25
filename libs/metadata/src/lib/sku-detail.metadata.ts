import { Metadata } from '@webpackages/types';

export const SkuDetailMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    color: {
      inputType: 'text',
      type: 'string',
      maxLength: 100,
      class: 'order-1 w-3/12 grow',
      example: 'white',
    },
    height: {
      inputType: 'text',
      type: 'string',
      maxLength: 100,
      class: 'order-1 w-3/12 grow',
      example: '60in',
    },
    width: {
      inputType: 'text',
      type: 'string',
      maxLength: 100,
      class: 'order-1 w-3/12 grow',
      example: '20in',
    },
    weight: {
      inputType: 'text',
      type: 'string',
      maxLength: 100,
      class: 'order-1 w-3/12 grow',
      example: '40lb',
    },
    manual: {
      inputType: 'text',
      type: 'string',
      format: 'url',
      class: 'order-1 w-3/12 grow',
      example: 'https://youtube.com',
    },
    make: {
      inputType: 'text',
      type: 'string',
      maxLength: 100,
      class: 'order-1 w-3/12 grow',
      example: 'apple',
    },
    model: {
      type: 'string',
      maxLength: 100,
      inputType: 'text',
      class: 'order-1 w-2/12 grow',
      example: '2024',
    },

    notes: {
      type: 'string',
      maxLength: 1000,
      example: 'Add some notes about the product',
      inputType: 'textarea',
      class: 'w-full order-2 grow',
    },
    website: {
      type: 'string',
      inputType: 'text',
      maxLength: 100,
      format: 'url',
      class: 'order-3 grow',
      example: 'https://youtube.com',
    },
    manufacturer: {
      type: 'string',
      maxLength: 100,
      class: 'order-4 grow',
      example: 'GH Hub Fast Production',
    },
    highlight: {
      type: 'string',
      maxLength: 100,
      inputType: 'text',
      class: 'w-3/12 grow order-3',
      example: 'The product highlights, hot features',
    },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['sku', 'name'],
      resourceLabelProperty: 'name',
    },
  },
};
