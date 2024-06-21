import { Metadata } from '@webpackages/types';
import { PhoneMetadata } from './phone.metadata';
import { AccessTokenMetadata } from './access-token.metadata';

export const UserPhoneMetadata: Metadata = {
  groupName: 'administation',
  properties: PhoneMetadata.properties,
  relations: AccessTokenMetadata.relations,
};
