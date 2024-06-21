import { NumberOptions, ValidateNumber } from './validate-number';

import { validateSync } from 'class-validator';

describe('ValidateNumber', () => {
  it.each`
    options                                         | value | expectedErrors
    ${{} as NumberOptions}                          | ${{}} | ${['isNumber']}
    ${{ minimum: 3 } as NumberOptions}              | ${{}} | ${['isNumber', 'min']}
    ${{ maximum: 3 } as NumberOptions}              | ${{}} | ${['isNumber', 'max']}
    ${{ isInt: true, minimum: 3 } as NumberOptions} | ${{}} | ${['isInt', 'min']}
  `(
    'should validate $value with $options and return the errors $expectedErrors',
    ({ options, value, expectedErrors }) => {
      class ABC {
        @ValidateNumber(options, {})
        value: unknown;
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
