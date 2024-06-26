import { Metadata } from '@webpackages/types';

export const ClockMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    starDate: {
      type: 'date',
      required: true,
      update: false,
      example: new Date().toLocaleDateString(),
    },
    endDate: { type: 'date', example: new Date().toLocaleDateString() },
  },
  relations: {
    employee: {
      relationType: 'owner',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      update: false,
    },
  },
};
