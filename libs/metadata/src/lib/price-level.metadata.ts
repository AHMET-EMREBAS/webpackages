import { Metadata } from '@webpackages/types';

export const PriceLevelMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    name: {
      type: 'string',
      label: 'Price Level Name',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'Chicago Retail',
      tabIndex: 1,
    },
    currency: {
      type: 'string',
      label: 'Currency',
      required: true,
      minLength: 1,
      maxLength: 10,
      example: 'USD',
      tabIndex: 2,
    },

    taxrate: {
      type: 'number',
      label: 'Location Taxrate',
      required: true,
      minimum: 0,
      example: 10.25,
      tabIndex: 3,
    },
  },
};
