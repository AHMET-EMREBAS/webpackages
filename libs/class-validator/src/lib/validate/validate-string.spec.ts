import { StringOptions, ValidateString } from './validate-string';

import { validateSync } from 'class-validator';

describe('ValidateString', () => {
  it.each`
    options                                       | value | expectedErrors
    ${{} as StringOptions}                        | ${{}} | ${['isString']}
    ${{ minLength: 3 } as StringOptions}          | ${{}} | ${['isString', 'minLength']}
    ${{ maxLength: 3 } as StringOptions}          | ${{}} | ${['isString', 'maxLength']}
    ${{ format: 'email' } as StringOptions}       | ${{}} | ${['isString', 'isEmail']}
    ${{ format: 'barcode' } as StringOptions}     | ${{}} | ${['isString', 'minLength', 'maxLength', 'notContains', 'isAlphanumeric']}
    ${{ format: 'credit-card' } as StringOptions} | ${{}} | ${['isString', 'isCreditCard']}
    ${{ format: 'ean' } as StringOptions}         | ${{}} | ${['isString', 'isEAN']}
    ${{ format: 'ip4' } as StringOptions}         | ${{}} | ${['isString', 'isIp']}
    ${{ format: 'ip6' } as StringOptions}         | ${{}} | ${['isString', 'isIp']}
    ${{ format: 'name' } as StringOptions}        | ${{}} | ${['isString', 'isAlphanumeric', 'minLength', 'maxLength']}
    ${{ format: 'password' } as StringOptions}    | ${{}} | ${['isString', 'isStrongPassword']}
    ${{ format: 'url' } as StringOptions}         | ${{}} | ${['isString', 'isUrl']}
    ${{ format: 'data-uri' } as StringOptions}    | ${{}} | ${['isString', 'isDataURI']}
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
