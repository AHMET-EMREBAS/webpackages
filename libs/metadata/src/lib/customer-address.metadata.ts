import { Metadata } from '@webpackages/types';
import { AddressMetadata } from './address.metadata';

export const CustomerAddressMetadata: Metadata = {
  groupName: 'customer-management',
  properties: AddressMetadata.properties,
  relations: {
    user: {
      relationType: 'owner',
      targetName: 'Customer',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
      update: false,
    },
  },
};
