import { Metadata } from '@webpackages/types';

export const QuantityMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    quantity: {
      type: 'number',
      minimum: 0,
      required: true,
      example: 13,
      tabIndex: 3,
    },
    alert: { type: 'boolean', example: false },
    alertUnderQuantity: { type: 'number', example: 3, tabIndex: 5 },
    autoRepurchase: { type: 'boolean', example: false, tabIndex: 5 },
    notSellLastOne: { type: 'boolean', example: false, tabIndex: 5 },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      viewColumns: ['name', 'sku'],
      tabIndex: 1,
      resourceLabelProperty: 'name',
      update: false,
    },
    store: {
      relationType: 'owner',
      targetName: 'Store',
      viewColumns: ['name'],
      resourceLabelProperty: 'name',
      update: false,
      tabIndex: 2,
    },
  },
};
