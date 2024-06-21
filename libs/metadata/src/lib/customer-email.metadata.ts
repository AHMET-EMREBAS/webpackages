import { Metadata } from '@webpackages/types';
import { EmailMetadata } from './email.metadata';
import { CustomerAddressMetadata } from './customer-address.metadata';

export const CustomerEmailMetadata: Metadata = {
  groupName: 'administation',
  properties: EmailMetadata.properties,
  relations: CustomerAddressMetadata.relations,
};
