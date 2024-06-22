import { Metadata } from '@webpackages/types';
import { ProfileMetadata } from './profile.metadata';
import { CustomerAddressMetadata } from './customer-address.metadata';

export const CustomerProfileMetadata: Metadata = {
  groupName: 'customer-management',
  properties: ProfileMetadata.properties,
  relations: CustomerAddressMetadata.relations,
};
