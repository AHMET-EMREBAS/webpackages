import { Metadata } from '@webpackages/types';

export const ProfileMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    firstName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    lastName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
    },
    middleName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
    },
  },
  relations: {},
};
