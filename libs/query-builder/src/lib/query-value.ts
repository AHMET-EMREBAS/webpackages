import { QueryOperatoName, queryOperator } from './query-operator';

export class QueryValue {
  readonly operator: QueryOperatoName;
  readonly value: string | number | Date | boolean;

  constructor(obj: QueryValue) {
    this.operator = obj.operator;
    this.value = obj.value;
  }

  static parse(queryString: string) {
    const [preOperator, ...rest] = queryString.split(':');
    const operator = queryOperator(preOperator);
    const value = rest.join(':');
    if (operator && value) {
      return new QueryValue({ operator, value });
    }

    return undefined;
  }

  toString() {
    return `${this.operator}:${this.value}`;
  }
}
