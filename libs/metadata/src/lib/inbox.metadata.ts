import { Metadata } from '@webpackages/types';

export const InboxMetadata: Metadata = {
  groupName: 'administation',
  relations: {
    employee: {
      relationType: 'owner',
      targetName: 'User',
      resourceLabelProperty: 'username',
      update: false,
    },
  },
};
