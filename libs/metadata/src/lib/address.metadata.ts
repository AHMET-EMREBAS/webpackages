import { Metadata } from '@webpackages/types';

export const AddressMetadata: Metadata = {
  groupName: 'common',
  properties: {
    street: { type: 'string' , minLength:1, maxLength:100, required:true,  example:"Street Addreess"},
    city: { type: 'string' , minLength:1, maxLength:100, required:true,  example:"City"},
    state: { type: 'string' , minLength:1, maxLength:100, required:true,  example:"State"},
    zip: { type: 'string' , minLength:1, maxLength:100, required:true,  example:"Zip"},
  },
};
