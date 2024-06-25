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
      example: 'Product Name',
    },
    description: {
      type: 'string',
      maxLength: 1000,
      example: 'Product Description',
    },
    upc: {
      type: 'string',
      required: true,
      unique: true,
      format: 'barcode',
      example: '787593827182',
    },
  },
  relations: {
    category: {
      relationType: 'one',
      targetName: 'Category',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
    },
    supplier: {
      relationType: 'one',
      targetName: 'Supplier',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
    },
  },
};
