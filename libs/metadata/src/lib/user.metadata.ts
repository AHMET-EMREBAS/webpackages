import { AccessPolicy, Metadata } from '@webpackages/types';

export const UserMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    username: { type: 'string', format: 'email', required: true, unique: true },
    password: { type: 'string', format: 'password', required: true },
    permissions: {
      type: 'object',
      target: AccessPolicy,
      from: '@webpackages/types',
    },
  },
  relation: {},
};
