import { Metadata } from '@webpackages/types';

export const ProfileMetadata: Metadata = {
  groupName: 'inventory',
  properties: {
    firstName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      example: 'Ahmet',
    },
    lastName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      example: 'Emrebas',
    },
    middleName: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      example: 'N/A',
    },
  }
};
