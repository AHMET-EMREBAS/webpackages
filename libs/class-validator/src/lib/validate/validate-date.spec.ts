import { DateOptions, ValidateDate } from './validate-date';
import { UseDecorators } from '../common';

import { validateSync } from 'class-validator';

describe('ValidateDate', () => {
  it.each`
    options                                  | value | expectedErrors
    ${{} as DateOptions}                     | ${{}} | ${['isDate']}
    ${{ before: new Date() } as DateOptions} | ${{}} | ${['isDate', 'maxDate']}
    ${{ after: new Date() } as DateOptions}  | ${{}} | ${['isDate', 'minDate']}
  `(
    'should validate $value with $options and return the errors $expectedErrors',
    ({ options, value, expectedErrors }) => {
      class ABC {
        @UseDecorators(ValidateDate(options, {})) value: unknown;
        constructor(obj: Partial<ABC>) {
          Object.assign(this, obj);
        }
      }
      const errors = validateSync(new ABC(value));

      const error = errors[0];

      const constraints = Object.keys(error?.constraints || {});

      expect(constraints.length).toBe(expectedErrors.length);

      for (const ee of expectedErrors) {
        expect(constraints.includes(ee)).toBeTruthy();
      }
    }
  );
});
