export type QueryDto<T> = Partial<Omit<Record<keyof T, unknown>, 'id'>>;
