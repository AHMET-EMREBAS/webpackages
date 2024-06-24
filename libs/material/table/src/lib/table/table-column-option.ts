export type TableColumnOption<T = any> = {
  name: string;
  label: string;
  map?: (value: T) => unknown;
};

export type TableColumnOptions<T = any> = TableColumnOption<T>[];
