import { Metadata } from '@webpackages/types';

export const SessionMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    deviceId: {
      type: 'string',
      required: true,
      unique: true,
      example: '1279184212',
      description:
        'Unique device id to manage use access and profile (internal)',
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
