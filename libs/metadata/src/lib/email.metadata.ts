import { Metadata } from '@webpackages/types';

export const EmailMetadata: Metadata = {
  groupName: 'common',
  properties: {
    email: { type: 'string', format: 'email', required: true },
  },
  relations: {},
};
