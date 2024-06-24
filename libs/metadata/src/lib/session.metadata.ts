import { Metadata } from '@webpackages/types';

export const SessionMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    scope: {
      type: 'string',
      example: 'Inventory',
      description: 'Access scope',
    },
    deviceId: {
      type: 'string',
      required: true,
      unique: true,
      example: '1279184212',
      description:
        'Unique device id to manage use access and profile (internal)',
    },
    token: {
      type: 'string',
      required: true,
      unique: true,
      example: '29839ualiksduriqwuyer;oasf',
      description: 'JWT Token',
    },
  },
  relations: {
    user: {
      relationType: 'owner',
      targetName: 'User',
      viewColumns: ['username'],
    },
  },
};
