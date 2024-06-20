export type QueryDto<T> = Omit<Record<keyof T, unknown>, 'id'>;
