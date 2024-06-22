import { Metadata } from '@webpackages/types';
import { ImgMetadata } from './img.metadata';
import { CustomerAddressMetadata } from './customer-address.metadata';

export const CustomerImgMetadata: Metadata = {
  groupName: 'customer-management',
  properties: ImgMetadata.properties,
  relations: CustomerAddressMetadata.relations,
};
