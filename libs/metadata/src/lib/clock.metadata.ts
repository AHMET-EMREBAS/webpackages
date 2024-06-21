import { Metadata } from '@webpackages/types';

export const ClockMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    starDate: { type: 'date', required: true, update: false },
    endDate: { type: 'date' },
  },
  relations: {
    user: { relationType: 'owner', targetName: 'User' },
  },
};
