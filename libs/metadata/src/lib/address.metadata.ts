import { Metadata } from '@webpackages/types';

export const AddressMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    street: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    zip: { type: 'string' },
  },
};
