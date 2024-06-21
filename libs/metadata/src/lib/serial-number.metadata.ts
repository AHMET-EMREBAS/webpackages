import { Metadata } from '@webpackages/types';

export const SerialNumberMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
    },
  },
  relations: {},
};
