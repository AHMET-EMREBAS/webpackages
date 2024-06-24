import { createValueProvider } from '@webpackages/material/core';
import { TableColumnOption } from './table-column-option';

export const {
  default: provideDefaultTimestampColumnOptions,
  provide: provideTimeStampColumnOptions,
  token: getTimestampColumOptionsToken,
} = createValueProvider<TableColumnOption[]>('TableTimestampColumns', [
  { name: 'createdAt', label: 'Created' },
  { name: 'updatedAt', label: 'Updated' },
  { name: 'deletedAt', label: 'Deleted' },
]);

export const {
  default: provideDefaultIdColumnOptions,
  provide: provideTableIdColumns,
  token: getTableIdColumnsToken,
} = createValueProvider<TableColumnOption[]>('TableIdColumns', [
  {
    name: 'index',
    label: '#',
  },
  { name: 'eid', label: 'id' },
]);
