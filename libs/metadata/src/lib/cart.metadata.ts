import { Metadata } from '@webpackages/types';

export const CartMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    complete: { type: 'boolean' },
  },
  relations: {
    customer: { relationType: 'owner', targetName: 'Customer' },
    user: { relationType: 'owner', targetName: 'User' },
  },
};
