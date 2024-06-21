import { Metadata } from '@webpackages/types';

export const QuantityMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    quantity: {
      type: 'number',
      minimum: 0,
      required: true,
    },
    alert: { type: 'boolean' },
    alertUnderQuantity: { type: 'number' },
    autoRepurchase: { type: 'boolean' },
    notSellLastOne: { type: 'boolean' },
  },
  relations: {
    sku: { relationType: 'owner', targetName: 'Sku' },
    store: { relationType: 'owner', targetName: 'Store' },
  },
};
