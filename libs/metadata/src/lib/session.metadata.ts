import { Metadata } from '@webpackages/types';

export const SessionMetadata: Metadata = {
  groupName: 'administation',
  properties: {},
  relations: {
    user: { relationType: 'owner', targetName: 'User' },
  },
};
