import { Metadata } from '@webpackages/types';

export const SerialNumberMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    required: {
      type: 'boolean',
      label: 'Enforce Serial Number',
      inputType: 'checkbox',
      description: 'Is serial number required for the product?',
      class: 'w-full grow',
      tabIndex: 1,
    },
    type: {
      type: 'string',
      label: 'Serial Number Type',
      enum: ['none', 'incremental', 'actual'],
      inputType: 'select',
      required: true,
      default: 'incremental',
      class: 'order-1 w-full',
      tabIndex: 2,
    },
    prefix: {
      type: 'string',
      label: 'Prefix',
      inputType: 'text',
      class: 'order-3, w-full grow',
      tabIndex: 3,
    },
    serialNumber: {
      type: 'string',
      dependsOn: 'required',
      unique: true,
      update: false,
      minLength: 3,
      maxLength: 100,
      example: '1236846182674312',
      description: 'Unique product serial number to track product',
      class: 'order-5 w-full',
      tabIndex: 5,
    },
  },
  relations: {
    product: {
      relationType: 'owner',
      targetName: 'Product',
      label: '',
      viewColumns: ['name', 'upc'],
      resourceLabelProperty: 'name',
      update: false,
      class: 'order-6 w-4/12 grow',
      tabIndex: 6,
    },
  },
};
