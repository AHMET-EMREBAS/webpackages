import { Metadata } from '@webpackages/types';

export const SerialNumberMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    serialNumber: { type: 'string', minimum: 5 },
    inStock: { type: 'boolean', required: true },
    generated: { type: 'boolean' },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
  },
};
