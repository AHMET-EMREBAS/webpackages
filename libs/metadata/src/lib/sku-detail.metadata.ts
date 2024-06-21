import { Metadata } from '@webpackages/types';

export const SkuDetailMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    color: { type: 'string', maxLength: 100 },
    height: { type: 'string', maxLength: 100 },
    width: { type: 'string', maxLength: 100 },
    weight: { type: 'string', maxLength: 100 },
    manual: { type: 'string', format: 'url' },
  },
  relations: {},
};
