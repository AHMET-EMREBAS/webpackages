import { Metadata } from '@webpackages/types';

export const PriceLevelMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'Chicago Retail',
    },
    currency: {
      type: 'string',
      required: true,
      minLength: 1,
      maxLength: 10,
      example: 'USD',
    },

    taxrate: {
      type: 'number',
      required: true,
      minimum: 0,
      example: 10.25,
    },
  },
  relations: {},
};
