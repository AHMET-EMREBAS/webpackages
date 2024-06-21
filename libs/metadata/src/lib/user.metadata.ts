import { Metadata } from '@webpackages/types';

export const UserMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    username: {
      type: 'string',
      format: 'email',
      required: true,
      unique: true,
    },
    passwrod: {
      type: 'string',
      format: 'email',
      required: true,
      unique: true,
    },
    permissions: {
      type: 'object',
      targetName: 'AccessPolicy',
    },
  },
  relations: {
    department: { relationType: 'one', targetName: 'Department' },
  },
};
