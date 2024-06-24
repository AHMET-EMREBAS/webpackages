import { createValueProvider } from './create-provider';

/**
 *
 * @param resourcePath categorys | departments | products ...
 * @param search search-text
 * @returns
 */
export const defaultHttpSearchQueryBuilder = (
  resourcePath: string,
  search: string,
  take = 50
) => {
  return `api/${resourcePath}/?search=${search}&take=${take}`;
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

