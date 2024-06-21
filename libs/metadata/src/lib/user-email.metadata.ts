import { Metadata } from '@webpackages/types';
import { EmailMetadata } from './email.metadata';
import { AccessTokenMetadata } from './access-token.metadata';

export const UserEmailMetadata: Metadata = {
  groupName: 'administation',
  properties:EmailMetadata.properties,
  relations: AccessTokenMetadata.relations,
};
