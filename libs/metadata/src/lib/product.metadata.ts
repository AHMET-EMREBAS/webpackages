import { Metadata } from '@webpackages/types';

export const ProductMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      inputType: 'text',
      class: ' order-1 w-4/12 grow',
      example: 'Product Name',
    },
    upc: {
      type: 'string',
      required: true,
      unique: true,
      format: 'barcode',
      minLength: 8,
      maxLength: 13,
      class: ' order-2 w-4/12 grow',
      example: '787593827182',
    },
    description: {
      type: 'string',
      maxLength: 1000,
      example: 'Product Description',
      class: ' order-5 w-full',
    },
  },
  relations: {
    category: {
      relationType: 'one',
      targetName: 'Category',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      class: ' order-5 w-4/12 grow',
    },
    supplier: {
      relationType: 'one',
      targetName: 'Supplier',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      class: ' order-6 w-4/12 grow ',
    },
  },
};
