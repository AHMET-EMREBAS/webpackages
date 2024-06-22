import { Metadata } from '@webpackages/types';

export const ImgMetadata: Metadata = {
  groupName: 'common',
  properties: {
    title: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
    },
    generatedName: {
      type: 'string',
      update: false,
    },
  },
  relations: {},
};
