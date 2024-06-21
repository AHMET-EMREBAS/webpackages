import { Metadata } from '@webpackages/types';
import { ImgMetadata } from './img.metadata';
import { AccessTokenMetadata } from './access-token.metadata';

export const UserImgMetadata: Metadata = {
  groupName: 'administation',
  properties: ImgMetadata.properties,
  relations: AccessTokenMetadata.relations,
};
