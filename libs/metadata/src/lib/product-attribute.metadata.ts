import { Metadata, ProductAttributes } from '@webpackages/types';

export const ProductAttributeMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    key: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      required: true,
      inputType: 'select',
      enum: [...ProductAttributes],
      class: 'order-2 w-4/12 grow',
      example: 'Color',
    },
    value: {
      type: 'string',
      required: true,
      maxLength: 100,
      inputType: 'text',
      class: 'order-2 w-4/12 grow',
      example: '787593827182',
    },
  },
  relations: {
    product: {
      relationType: 'owner',
      targetName: 'Product',
      viewColumns: ['name', 'upc'],
      inputType: 'search',
      resourceLabelProperty: 'name',
    },
  },
};
