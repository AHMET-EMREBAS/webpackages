import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
  Sample: {},
};

const pluralNames = {
  Category: 'Categorys',
  Sample: 'Samples',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
