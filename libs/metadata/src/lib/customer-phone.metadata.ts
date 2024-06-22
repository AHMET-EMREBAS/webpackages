import { Metadata } from '@webpackages/types';
import { CustomerAddressMetadata } from './customer-address.metadata';
import { PhoneMetadata } from './phone.metadata';

export const CustomerPhoneMetadata: Metadata = {
  groupName: 'customer-management',
  properties: PhoneMetadata.properties,
  relations: CustomerAddressMetadata.relations,
};
