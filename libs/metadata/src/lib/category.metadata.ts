import { Metadata } from '@webpackages/types';

export const CategoryMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      label: 'Category Name',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'Default Category',
      class: 'w-full',
    },
  },
  relations: {},
};
