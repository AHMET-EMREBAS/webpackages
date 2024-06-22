import { Metadata } from '@webpackages/types';
import { ImgMetadata } from './img.metadata';

export const ProductImgMetadata: Metadata = {
  groupName: 'inventory',
  properties: ImgMetadata.properties,
  relations: {
    product: {
      relationType: 'owner',
      targetName: 'Product',
      viewColumns: ['name', 'upc'],
    },
  },
};
