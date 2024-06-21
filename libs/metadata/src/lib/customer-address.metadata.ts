import { Metadata } from '@webpackages/types';
import { AddressMetadata } from './address.metadata';

export const CustomerAddressMetadata: Metadata = {
  groupName: 'administation',
  properties: AddressMetadata.properties,
  relations: {
    user: { relationType: 'owner', targetName: 'Customer' },
  },
};
