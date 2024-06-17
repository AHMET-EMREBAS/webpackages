import { createStringValidator } from './string-validator';
describe('StringValidator', () => {
  it('should validate string', () => {
    const validatorFn = createStringValidator({
      minLength: 3,
      maxLength: 5,
      noSpace: true,
      notEmpty: true,
    });

    expect(validatorFn('')).toBe(false);
    expect(validatorFn('      d             ')).toBe(false);
    expect(validatorFn('       ')).toBe(false);
    expect(validatorFn(' ')).toBe(false);
    expect(validatorFn('s')).toBe(false);
    expect(validatorFn('ss')).toBe(false);
    expect(validatorFn('123456')).toBe(false);

    expect(validatorFn('1234')).toBe(true);
    expect(validatorFn('asd')).toBe(true);
  });
});
