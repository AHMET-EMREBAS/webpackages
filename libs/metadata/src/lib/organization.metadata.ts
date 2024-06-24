import { Metadata } from '@webpackages/types';

export const OrganizationMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      description: 'Organization name  ',
      example: 'Organization Name',
    },
  },
  relations: {
    manager: {
      relationType: 'one',
      targetName: 'User',
      viewColumns: ['username'],
    },
  },
};
