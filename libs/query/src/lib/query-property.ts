/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  ILike,
  In,
  LessThan,
  MoreThan,
  Not,
  And,
  FindOperator,
  Equal,
  LessThanOrEqual,
  MoreThanOrEqual,
} from 'typeorm';
import { isArray } from 'class-validator';
import { parseQueryInput, QueryOperator } from '@webpackages/query-builder';
import { PropertyType } from '@webpackages/types';
import { Property } from '@webpackages/property';

export function toQueryOperator(queryString: string) {
  const queryInput = parseQueryInput(queryString);

  if (queryInput && queryInput.operator && queryInput.value) {
    // Continue
  } else {
    return undefined;
  }

  const { operator, value: q } = queryInput;

  switch (operator as QueryOperator) {
    case QueryOperator.CONTAIN:
      return ILike(`%${q}%`);
    case QueryOperator.START_WITH:
      return ILike(`${q}%`);
    case QueryOperator.END_WITH:
      return ILike(`%${q}`);
    case QueryOperator.EQUAL:
      return Equal(`${q}`);
    case QueryOperator.IN:
      return In((q as string).split(','));
    case QueryOperator.MORE_THAN:
      return MoreThan(q);
    case QueryOperator.LESS_THAN:
      return LessThan(q);
    case QueryOperator.MORE_THAN_OR_EQUAL:
      return MoreThanOrEqual(q);
    case QueryOperator.LESS_THAN_OR_EQUAL:
      return LessThanOrEqual(q);

    case QueryOperator.NOT_CONTAIN:
      return Not(ILike(`%${q}%`));
    case QueryOperator.NOT_START_WITH:
      return Not(ILike(`${q}%`));
    case QueryOperator.NOT_END_WITH:
      return Not(ILike(`%${q}`));
    case QueryOperator.NOT_EQUAL:
      return Not(Equal(`${q}`));
    case QueryOperator.NOT_IN:
      return Not(In((q as string).split(',')));
    case QueryOperator.NOT_LESS_THAN:
      return Not(LessThan(q));
    case QueryOperator.NOT_MORE_THAN:
      return Not(MoreThan(q));
  }
}

export type QueryPropertyOptions = {
  type: PropertyType;
};

export function QueryProperty() {
  return applyDecorators(
    Property({ type: 'string', isArray: true, noValidate: true, example: '' }),
    Transform(({ value }) => {
      if (typeof value === 'string' && value.length > 0) {
        return toQueryOperator(value);
      } else if (isArray(value)) {
        const operators = value
          .filter((e) => typeof e === 'string')
          .map((v) => toQueryOperator(v))
          .filter((e) => e) as FindOperator<any>[];

        if (operators.length > 0) return And(...operators);
      }
      return undefined;
    })
  );
}
