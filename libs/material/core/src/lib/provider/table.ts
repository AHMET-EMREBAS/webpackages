import { TableColumnOptions } from '@webpackages/types';
import { createValueProvider } from './create-provider';

export const {
  default: provideDefaultTimestampColumnOptions,
  provide: provideTimeStampColumnOptions,
  token: getTimestampColumOptionsToken,
} = createValueProvider<TableColumnOptions>('TableTimestampColumns', [
  { name: 'createdAt', label: 'Created' },
  { name: 'updatedAt', label: 'Updated' },
  { name: 'deletedAt', label: 'Deleted' },
]);

export const {
  default: provideDefaultIdColumnOptions,
  provide: provideTableIdColumns,
  token: getTableIdColumnsToken,
} = createValueProvider<TableColumnOptions>('TableIdColumns', [
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

export function provideDefaultTableOptions() {
  return [
    provideDefaultTimestampColumnOptions(),
    provideDefaultIdColumnOptions(),
    provideDefaultTableRowRouteValueHandler(),
    provideDefaultContextEditRouteValue(),
    provideDefaultContextDeleteRouteValue(),
  ];
}
