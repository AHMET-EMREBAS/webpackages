import { Metadata } from '@webpackages/types';

export const InboxMetadata: Metadata = {
  groupName: 'administation',
  relations: {
    user: { relationType: 'owner', targetName: 'User' },
  },
};
