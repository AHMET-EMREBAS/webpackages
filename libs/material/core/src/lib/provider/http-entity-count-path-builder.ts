import { names } from '@webpackages/utils';
import { createValueProvider } from './create-provider';

export type HttpCountQueryBuilder = (entityName: string) => string;

export const defaultHttpCountQueryBuilder = (entityName: string) => {
  return `api/${names(entityName).pluralName.toLowerCase()}/count`;
};

export const {
  default: provideDefaultHttpCountQueryBuilder,
  provide: provideHttpCountQueryBuilder,
  token: getHttpCountQueryBuilderToken,
} = createValueProvider<HttpCountQueryBuilder>(
  'HttpCountQueryBuilder',
  defaultHttpCountQueryBuilder
);
