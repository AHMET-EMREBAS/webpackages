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
      inputType: 'text',
      class: ' order-2 w-4/12 grow',
      example: '787593827182',
    },
    description: {
      type: 'string',
      maxLength: 1000,
      example: 'Product Description',
      inputType: 'textarea',
      class: ' order-3 w-full',
    },
  },
  relations: {
    category: {
      relationType: 'one',
      targetName: 'Category',
      viewColumns: ['name'],
      inputType: 'search',
      class: ' order-4 w-4/12 grow',
      resourceLabelProperty: 'name',
    },
    supplier: {
      relationType: 'one',
      targetName: 'Supplier',
      viewColumns: ['name'],
      inputType: 'search',
      class: ' order-5 w-4/12 grow ',
      resourceLabelProperty: 'name',
    },
  },
};
