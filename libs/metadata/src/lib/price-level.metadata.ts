import { Metadata } from '@webpackages/types';

export const PriceLevelMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
    },

    taxrate: {
      type: 'number',
      required: true,
      minimum: 0,
    },
  },
  relations: {},
};
