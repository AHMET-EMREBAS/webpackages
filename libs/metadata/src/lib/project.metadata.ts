import { Metadata } from '@webpackages/types';

export const ProjectMetadata: Metadata = {
  groupName: 'project-management',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'Mission Imposibble Is Possible With Us',
    },
  },
};
