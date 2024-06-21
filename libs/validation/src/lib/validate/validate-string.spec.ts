import { ValidateString } from './validate-string';
import { ApiPropertyOptions } from '@webpackages/types';
import { validateSync } from 'class-validator';

describe('ValidateString', () => {
  it.each`
    options                                            | value | expectedErrors
    ${{} as ApiPropertyOptions}                        | ${{}} | ${['isString']}
    ${{ minLength: 3 } as ApiPropertyOptions}          | ${{}} | ${['isString', 'minLength']}
    ${{ maxLength: 3 } as ApiPropertyOptions}          | ${{}} | ${['isString', 'maxLength']}
    ${{ format: 'email' } as ApiPropertyOptions}       | ${{}} | ${['isString', 'isEmail']}
    ${{ format: 'barcode' } as ApiPropertyOptions}     | ${{}} | ${['isString', 'minLength', 'maxLength', 'notContains', 'isAlphanumeric']}
    ${{ format: 'credit-card' } as ApiPropertyOptions} | ${{}} | ${['isString', 'isCreditCard']}
    ${{ format: 'ean' } as ApiPropertyOptions}         | ${{}} | ${['isString', 'isEAN']}
    ${{ format: 'ip4' } as ApiPropertyOptions}         | ${{}} | ${['isString', 'isIp']}
    ${{ format: 'ip6' } as ApiPropertyOptions}         | ${{}} | ${['isString', 'isIp']}
    ${{ format: 'name' } as ApiPropertyOptions}        | ${{}} | ${['isString', 'isAlphanumeric', 'minLength', 'maxLength']}
    ${{ format: 'password' } as ApiPropertyOptions}    | ${{}} | ${['isString', 'isStrongPassword']}
    ${{ format: 'url' } as ApiPropertyOptions}         | ${{}} | ${['isString', 'isUrl']}
    ${{ format: 'data-uri' } as ApiPropertyOptions}    | ${{}} | ${['isString', 'isDataURI']}
  `(
    'should validate $value with $options and return the errors $expectedErrors',
    ({ options, value, expectedErrors }) => {
      class ABC {
        @ValidateString(options, {}) value: unknown;
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
