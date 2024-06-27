import { Metadata } from '@webpackages/types';

export const QuantityMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    quantity: {
      type: 'number',
      minimum: 0,
      required: true,
      example: 13,
    },
    alert: { type: 'boolean', example: false },
    alertUnderQuantity: { type: 'number', example: 3 },
    autoRepurchase: { type: 'boolean', example: false },
    notSellLastOne: { type: 'boolean', example: false },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['sku', 'name'],
      resourceLabelProperty: 'name',
      update: false,
    },
    store: {
      relationType: 'owner',
      targetName: 'Store',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      update: false,
    },
  },
};
