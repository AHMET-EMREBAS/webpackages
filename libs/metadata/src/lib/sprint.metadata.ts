import { Metadata } from '@webpackages/types';

export const SprintMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      description: 'Sprint name',
      example: 'Project Analisys',
      class: 'order-2 w-full ',
      tabIndex: 2,
    },
    description: {
      type: 'string',
      maxLength: 1000,
      description: 'Sprint description',
      example:
        'Focus on high level project specs and review similar projects to establish a reliable insight',
      class: 'order-3 w-full ',
      tabIndex: 3,
    },
  },
  relations: {
    project: {
      relationType: 'owner',
      targetName: 'Project',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      update: false,
      class: 'order-1 w-full',
      tabIndex: 1,
    },
  },
};
