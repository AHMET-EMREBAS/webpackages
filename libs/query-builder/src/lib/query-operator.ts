export enum QueryOperator {
  EQUAL = 'eq',
  MORE_THAN = 'mt',
  LESS_THAN = 'lt',
  MORE_THAN_OR_EQUAL = 'mte',
  LESS_THAN_OR_EQUAL = 'lte',
  START_WITH = 'sw',
  END_WITH = 'ew',
  CONTAIN = 'cn',
  IN = 'in',
  NOT_EQUAL = 'neq',
  NOT_MORE_THAN = 'nmt',
  NOT_LESS_THAN = 'nlt',
  NOT_START_WITH = 'nsw',
  NOT_END_WITH = 'new',
  NOT_CONTAIN = 'ncn',
  NOT_IN = 'nin',
}

export function queryOperator(operator: string): QueryOperator | null {
  return Object.values(QueryOperator).includes(operator as QueryOperator)
    ? (operator as QueryOperator)
    : null;
}

export type QueryOperatoName =
  | 'eq'
  | 'mt'
  | 'lt'
  | 'mte'
  | 'lte'
  | 'sw'
  | 'ew'
  | 'cn'
  | 'in'
  | 'neq'
  | 'nmt'
  | 'nlt'
  | 'nsw'
  | 'new'
  | 'ncn'
  | 'nin';
