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
      inputType: 'text',
      description: 'Unique product sku name',
      example: 'Unique SKU Namem - SK-1 Product name',
      class: 'order-2 w-4/12 grow',
      tabIndex: 2,
    },
    sku: {
      type: 'string',
      required: true,
      unique: true,
      description: 'Unique sku code',
      format: 'barcode',
      inputType: 'text',
      minLength: 6,
      maxLength: 13,
      class: 'order-3 w-4/12 grow',
      tabIndex: 3,
    },
    description: {
      type: 'string',
      maxLength: 1000,
      inputType: 'textarea',
      description: 'Sku description',
      example: 'Sku Description',
      class: 'order-4 w-full',
      tabIndex: 4,
    },
  },
  relations: {
    product: {
      relationType: 'owner',
      targetName: 'Product',
      viewColumns: ['upc'],
      label: 'Product',
      resourceLabelProperty: 'name',
      update: false,
      class: 'order-1 w-full',
      tabIndex: 1,
    },
  },
};
