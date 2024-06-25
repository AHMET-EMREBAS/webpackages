import { Metadata } from '@webpackages/types';

export const AddressMetadata: Metadata = {
  groupName: 'common',
  properties: {
    street: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      required: true,
      inputType: 'text',
      class: 'order-1 w-5/12',
      example: 'Street Addreess',
    },
    city: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      required: true,
      inputType: 'text',
      class: 'order-2 w-5/12',
      example: 'City',
    },
    state: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      required: true,
      inputType: 'text',
      class: 'order-4 w-5/12',
      example: 'State',
    },
    zip: {
      type: 'string',
      minLength: 1,
      maxLength: 100,
      required: true,
      inputType: 'text',
      class: 'order-5 w-5/12',
      example: 'Zip',
    },
  },
};
