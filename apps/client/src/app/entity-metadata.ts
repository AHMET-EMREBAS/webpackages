import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
  Sample: {},
  Product: {},
  Store: {},
  Sku: {},
  PriceLevel: {},
};

const pluralNames = {
  Category: 'Categorys',
  Sample: 'Samples',
  Product: 'Products',
  Store: 'Stores',
  Sku: 'Skus',
  PriceLevel: 'PriceLevels',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
