import { Metadata } from '@webpackages/types';

export const EventMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
    },
    payload: {
      type: 'object',
    },
  },
  relations: {},
};
