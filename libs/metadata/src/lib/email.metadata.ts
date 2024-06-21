import { Metadata } from '@webpackages/types';

export const EmailMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    email: { type: 'string', format: 'email', required: true },
  },
  relations: {},
};
