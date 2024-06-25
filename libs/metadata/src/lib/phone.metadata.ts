import { Metadata } from '@webpackages/types';

export const PhoneMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    phone: {
      type: 'string',
      format: 'phone',
      required: true,
    },
  },
};
