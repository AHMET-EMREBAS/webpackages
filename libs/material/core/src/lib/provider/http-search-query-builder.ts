import { names } from '@webpackages/utils';
import { createValueProvider } from './create-provider';

/**
 *
 * @param resourcePath categorys | departments | products ...
 * @param search search-text
 * @returns
 */
export const defaultHttpSearchQueryBuilder = (
  resourcePath: string,
  search: string
) => {
  return `api/${names(
    names(resourcePath).pluralName
  ).className.toLowerCase()}/?search=${search}&take=${10000}`;
};

export const {
  default: provideDefaultHttpSearchQueryBuilder,
  provide: provideHttpSearchQueryBuilder,
  token: getHttpSearchQueryBuilderToken,
} = createValueProvider<HttpSearchQueryBuilder>(
  'HttpSearchQueryBuilder',
  defaultHttpSearchQueryBuilder
);

export type HttpSearchQueryBuilder = (
  resourceName: string,
  search: string,
  take?: number
) => string;
