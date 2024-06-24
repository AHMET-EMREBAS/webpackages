export type TableColumnOption<T = any> = {
  name: string;
  label: string;
  map?: (value: T) => unknown;
  class?: (value: T) => string;
};

export type TableColumnOptions<T = any> = TableColumnOption<T>[];
