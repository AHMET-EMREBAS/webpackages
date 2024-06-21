import { Metadata } from '@webpackages/types';
import { ProfileMetadata } from './profile.metadata';
import { AccessTokenMetadata } from './access-token.metadata';

export const UserProfileMetadata: Metadata = {
  groupName: 'administation',
  properties: ProfileMetadata.properties,
  relations: AccessTokenMetadata.relations,
};
