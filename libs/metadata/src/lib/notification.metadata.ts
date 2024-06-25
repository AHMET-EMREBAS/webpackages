import { Metadata } from '@webpackages/types';

export const NotificationMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    message: {
      type: 'string',
      maxLength: 1000,
    },
  }
};
