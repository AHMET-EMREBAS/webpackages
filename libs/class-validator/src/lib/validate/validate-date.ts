import { IsDate, MaxDate, MinDate, ValidationOptions } from 'class-validator';
import { UseDecorators } from '../common';

export type DateOptions = {
  type: 'date';
  before: Date;
  after: Date;
  weekDays: boolean;
  weekends: boolean;
};

export function ValidateDate(
  options: Partial<DateOptions>,
  validationOptions: ValidationOptions
): PropertyDecorator {
  const decorators: PropertyDecorator[] = [];

  const { after, before } = options;

  decorators.push(IsDate(validationOptions));

  if (after != undefined) {
    decorators.push(MinDate(after, validationOptions));
  }
  if (before != undefined) {
    decorators.push(MaxDate(before, validationOptions));
  }

  return UseDecorators(decorators);
}
