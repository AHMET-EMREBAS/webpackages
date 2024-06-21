import { Metadata } from '@webpackages/types';
import { ImgMetadata } from './img.metadata';
import { CustomerAddressMetadata } from './customer-address.metadata';

export const CustomerImgMetadata: Metadata = {
  groupName: 'administation',
  properties: ImgMetadata.properties,
  relations: CustomerAddressMetadata.relations,
};
