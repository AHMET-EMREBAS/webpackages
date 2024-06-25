import { Metadata } from '@webpackages/types';

export const StoreMetadata: Metadata = {
  groupName: 'administation',
  properties: {
    name: {
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true,
      unique: true,
      description: 'Store name might contain a partial address information',
      example: 'Chicago B-Street 60645',
    },
  },
  relations: {
    manager: {
      relationType: 'one',
      targetName: 'User',
      viewColumns: ['username'],
      resourceLabelProperty: 'username',
    },
  },
};
