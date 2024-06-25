import { printInputValiators } from './print-input-validators';

describe('PrintInputValidators', () => {
  it('should print input validators', () => {
    const result = printInputValiators({
      name: 'name',
      minLength: 3,
      maxLength: 30,
      required: true,
      unique: true,
    });

    expect(result).toBe(
      `[Validators.minLength(3), Validators.maxLength(30), Validators.required]`
    );
  });
});
