import { PropertyOptions } from '@webpackages/types';
import { createValueProvider } from './create-provider';
import { provideDefaultHttpSearchQueryBuilder } from './http-search-query-builder';

export const {
  default: provideDefaultTimestampColumnOptions,
  provide: provideTimeStampColumnOptions,
  token: getTimestampColumOptionsToken,
} = createValueProvider<Partial<PropertyOptions>[]>('TableTimestampColumns', [
  { name: 'createdAt', label: 'Created' },
  { name: 'updatedAt', label: 'Updated' },
  { name: 'deletedAt', label: 'Deleted' },
]);

export const {
  default: provideDefaultIdColumnOptions,
  provide: provideTableIdColumns,
  token: getTableIdColumnsToken,
} = createValueProvider<Partial<PropertyOptions>[]>('TableIdColumns', [
  { name: 'eid', label: '#' },
]);

export type TableRowRouteValueHandler = (row: any) => string[];

export const {
  default: provideDefaultTableRowRouteValueHandler,
  token: getTableRowRouteValueHandlerToken,
  provide: provideTableRowRouteValueHandler,
} = createValueProvider<TableRowRouteValueHandler>(
  'TableRowRouteValueHandler',
  (value) => ['editor', value.eid]
);

export const {
  default: provideDefaultContextEditRouteValue,
  token: getContextEditRouteValueToken,
  provide: provideContextEditRouteValue,
} = createValueProvider<TableRowRouteValueHandler>(
  'ContextEditRouteValue',
  (value) => ['editor', value.eid]
);

export const {
  default: provideDefaultContextDeleteRouteValue,
  token: getContextDeleteRouteValueToken,
  provide: provideContextDeleteRouteValue,
} = createValueProvider<TableRowRouteValueHandler>(
  'ContextDeleteRouteValue',
  (value) => ['delete', value.eid]
);

export const {
  default: provideDefaultTableColumnOptions,
  provide: provideTableColumnOptions,
  token: getTableColumnOptionsToken,
} = createValueProvider<Partial<PropertyOptions>[]>('TableColumnOptions', []);

export function provideDefaultTableOptions() {
  return [
    provideDefaultHttpSearchQueryBuilder(),
    provideDefaultTimestampColumnOptions(),
    provideDefaultIdColumnOptions(),
    provideDefaultTableRowRouteValueHandler(),
    provideDefaultContextEditRouteValue(),
    provideDefaultContextDeleteRouteValue(),
    provideDefaultTableColumnOptions(),
  ];
}
