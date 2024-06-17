import { ObjectLiteral } from 'typeorm';

export type QueryDto<T extends ObjectLiteral> = Omit<
  Record<keyof T, any>,
  'id'
>;
