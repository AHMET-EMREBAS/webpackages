import { Metadata } from '@webpackages/types';

export const SupplierMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      example: 'ABC Wholesale 68',
      inputType: 'text',
    },
    // summary: {
    //   type: 'string',
    //   minLength: 3,
    //   maxLength: 1000,
    //   inputType: 'textarea',
    // },
    // webiste: {
    //   type: 'string',
    //   maxLength: 300,
    //   inputType: 'text',
    //   format: 'url',
    // },
    // phone: {
    //   type: 'string',
    //   maxLength: 300,
    //   inputType: 'text',
    //   format: 'url',
    // },
  },
};
