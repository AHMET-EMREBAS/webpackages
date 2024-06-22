import { Metadata } from '@webpackages/types';

export const CategoryMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'Default Category',
    },
  },
  relations: {},
};
