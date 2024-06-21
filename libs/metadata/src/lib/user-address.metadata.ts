import { Metadata } from '@webpackages/types';
import { AddressMetadata } from './address.metadata';
import { AccessTokenMetadata } from './access-token.metadata';

export const UserAddressMetadata: Metadata = {
  groupName: 'administation',
  properties: AddressMetadata.properties,
  relations: AccessTokenMetadata.relations,
};
