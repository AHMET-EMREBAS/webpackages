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
    },
    description: {
      type: 'string',
      maxLength: 1000,
      description: 'Sprint description',
      example:
        'Focus on high level project specs and review similar projects to establish a reliable insight',
    },
  },
  relations: {
    project: {
      relationType: 'owner',
      targetName: 'Project',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      update: false,
    },
  },
};
