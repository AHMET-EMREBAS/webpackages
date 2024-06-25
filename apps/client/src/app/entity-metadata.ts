import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
  Sample: {},
  Product: {},
};

const pluralNames = {
  Category: 'Categorys',
  Sample: 'Samples',
  Product: 'Products',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
