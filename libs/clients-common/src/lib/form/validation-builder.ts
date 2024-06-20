/* eslint-disable @typescript-eslint/no-explicit-any */
import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import {
  isEmail,
  isStrongPassword,
  isPhoneNumber,
  isIn,
  isURL,
  isNumber,
  minLength,
  maxLength,
  isNumberString,
  isDate,
} from 'class-validator';

export class ValidatorBuilder<T extends Record<string, any> = any> {
  private readonly validatorList: ValidatorFn[] = [];

  constructor(
    private readonly propertyName: keyof T,
    protected isRequired?: boolean
  ) {
    if (!propertyName) throw new Error('Property name is required!');

    if (isRequired) {
      this.required();
    }
  }

  private notValiate(c: AbstractControl) {
    if (this.isRequired) {
      return false;
    } else if (c.value == undefined || c.value == '') {
      return true;
    }

    return false;
  }

  private __name() {
    return this.propertyName?.toString();
  }

  private push(fn: ValidatorFn) {
    this.validatorList.push(fn);
    return this;
  }

  protected required(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      return c.value == undefined
        ? { required: `${this.__name()} is required!` }
        : null;
    });
  }

  date(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return isDate(new Date(c.value))
        ? null
        : {
            date: `${this.__name()} should be a valid date!`,
          };
      return null;
    });
  }

  range(start: number, end: number): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      const cValue = parseInt(c.value);
      if (cValue) {
        cValue >= start && cValue <= end
          ? null
          : {
              range: `${this.__name()} should be in range of ${start} and ${end}`,
            };
      }

      return null;
    });
  }

  url(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return isURL(c.value)
        ? null
        : { url: `${this.__name()} should be valid url!` };
    });
  }

  minLength(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return c.value?.length < value
          ? {
              minLength: `${this.__name()} should be longer than ${value}!`,
            }
          : null;
      });

    return this;
  }

  maxLength(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return c.value?.length > value
          ? {
              maxLength: `${this.__name()} should be shorter than ${value}!`,
            }
          : null;
      });
    return this;
  }

  min(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return c.value < value
          ? {
              min: `${this.__name()} should be more than ${value}!`,
            }
          : null;
      });
    return this;
  }

  max(value?: number): ValidatorBuilder<T> {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return c.value > value
          ? {
              max: `${this.__name()} should be less than ${value}!`,
            }
          : null;
      });
    return this;
  }

  email(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return isEmail(c.value)
        ? null
        : { email: `${this.__name()} should be a valid email!` };
    });
  }

  password(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return isStrongPassword(c.value)
        ? null
        : {
            password: `${this.__name()} should be a strong password!`,
          };
    });
  }

  ean(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return (isNumberString(c.value) || isNumber(c.value)) &&
        minLength(c.value, 10) &&
        maxLength(c.value, 13)
        ? null
        : { ean: `${this.__name()} should be a valid barcode!` };
    });
  }

  phone(): ValidatorBuilder<T> {
    return this.push((c: AbstractControl) => {
      if (this.notValiate(c)) {
        return null;
      }
      return isPhoneNumber(c.value)
        ? null
        : {
            phone: `${this.__name()} should be a valid phone number!`,
          };
    });
  }

  isIn(value?: any[]) {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return isIn(c.value, value)
          ? null
          : { isIn: `${this.__name()} should be one of ${value}` };
      });
    return this;
  }

  isNotIn(value?: any[]) {
    if (value != undefined)
      return this.push((c: AbstractControl) => {
        if (this.notValiate(c)) {
          return null;
        }
        return isIn(c.value, value)
          ? { isNotIn: `${this.__name()} should be none of ${value}` }
          : null;
      });
    return this;
  }

  build(): ValidatorFn[] {
    return [...this.validatorList];
  }
}