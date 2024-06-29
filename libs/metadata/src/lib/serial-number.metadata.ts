import { Metadata } from '@webpackages/types';

export const SerialNumberMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    required: {
      type: 'boolean',
      label: 'Enforce Serial Number',
      default: false,
      example: false,
      description: 'Is serial number required for the product?',
      class: 'order-1 w-full grow',
      tabIndex: 1,
    },
    type: {
      type: 'string',
      label: 'Serial Number Type',
      enum: ['incremental', 'actual'],
      inputType: 'select',
      required: true,
      default: 'incremental',
      class: 'order-2 w-full',

      tabIndex: 2,
    },
    prefix: {
      type: 'string',
      label: 'Prefix',
      inputType: 'text',

      class: 'order-3, w-4/12 grow',
      tabIndex: 3,
    },
    suffix: {
      type: 'string',
      label: 'Suffix',
      inputType: 'text',
      class: 'order-4, w-4/12 grow',
      tabIndex: 4,
    },
    serialNumber: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 100,
      example: '1236846182674312',
      description: 'Unique product serial number to track product',
      class: 'order-5 w-full',
      tabIndex: 5,
    },
  },
  relations: {
    sku: {
      relationType: 'owner',
      targetName: 'Sku',
      label: '',
      viewColumns: ['sku', 'name'],
      resourceLabelProperty: 'name',

      class: 'order-6 w-4/12 grow',
      tabIndex: 6,
    },
  },
};
