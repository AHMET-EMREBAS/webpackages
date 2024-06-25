import { Metadata } from '@webpackages/types';

export const AccessTokenMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 100,
      example: 'Token name',
    },
    token: {
      type: 'string',
      required: true,
      minLength: 10,
      maxLength: 100,
      example: 'wiqouer923784123uis918374jw892y43',
    },
  },
  relations: {
    user: {
      relationType: 'owner',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
    },
  },
};
