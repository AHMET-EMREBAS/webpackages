import { Metadata } from '@webpackages/types';
import { CategoryMetadata } from './category.metadata';

export const DepartmentMetadata: Metadata = {
  groupName: 'common',
  properties: CategoryMetadata.properties,
  relations: {},
};
