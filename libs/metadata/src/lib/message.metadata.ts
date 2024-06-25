import { Metadata } from '@webpackages/types';

export const MessageMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    message: { type: 'string', maxLength: 2000 },
    readDate: { type: 'date' },
  },
  relations: {
    user: {
      relationType: 'owner',
      targetName: 'User',
      resourceLabelProperty: 'username',
    },
    to: {
      relationType: 'one',
      targetName: 'User',
      resourceLabelProperty: 'username',
    },
  },
};
