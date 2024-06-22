import { Metadata } from '@webpackages/types';

export const UserMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    username: {
      type: 'string',
      format: 'email',
      required: true,
      unique: true,

      description: 'Username',
      example: 'admin@domain.com',
    },
    password: {
      type: 'string',
      format: 'email',
      required: true,
      unique: true,
      description: 'Strong password',
      example: '!Password123.',
    },
    permissions: {
      type: 'object',
      targetName: 'AccessPolicy',
      description: 'User permissions',
      example: {
        Admin: true,
        Product: {
          manage: true,
        },
        User: {
          read: true,
          write: true,
          update: true,
          delete: true,
        },
      },
    },
  },
  relations: {
    department: {
      relationType: 'one',
      targetName: 'Department',
      viewColumns: ['name'],
    },
  },
};
