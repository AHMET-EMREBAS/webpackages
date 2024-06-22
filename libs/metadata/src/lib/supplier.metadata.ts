import { Metadata } from '@webpackages/types';

export const SupplierMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'ABC Wholesale 68',
    },
  }
};
