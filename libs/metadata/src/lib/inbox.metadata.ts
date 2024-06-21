import { Metadata } from '@webpackages/types';

export const InboxMetadata: Metadata = {
  groupName: 'administation',
  properties: {},
  relations: {
    user: { relationType: 'owner', targetName: 'User' },
    sent: { relationType: 'many', targetName: 'Message' },
    received: { relationType: 'many', targetName: 'Message' },
  },
};
