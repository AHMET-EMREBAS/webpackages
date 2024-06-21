import { Metadata } from '@webpackages/types';

export const AccessTokenMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: { type: 'string', required: true, minLength: 3, maxLength: 100 },
    token: { type: 'string', required: true, minLength: 10, maxLength: 100 },
  },
  relations: {
    user: { relationType: 'owner', targetName: 'User', viewColumns:[ 'username'] },
  },
};
