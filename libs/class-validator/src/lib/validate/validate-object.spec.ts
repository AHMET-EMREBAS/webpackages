import { ObjectOptions, ValidateObject } from './validate-object';
import { UseDecorators } from '../common';
import { validateSync } from 'class-validator';
class CDF {}

describe('ValidateObject', () => {
  it.each`
    options                             | value | expectedErrors
    ${{ target: CDF } as ObjectOptions} | ${{}} | ${['isObject']}
    ${{ target: CDF } as ObjectOptions} | ${{}} | ${['isObject']}
    ${{ target: CDF } as ObjectOptions} | ${{}} | ${['isObject']}
  `(
    'should validate $value with $options and return the errors $expectedErrors',
    ({ options, value, expectedErrors }) => {
      class ABC {
        @UseDecorators(ValidateObject(options, {})) value: unknown;
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
