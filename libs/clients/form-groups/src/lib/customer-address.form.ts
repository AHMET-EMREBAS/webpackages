import { FormBuilder, Validators } from '@angular/forms';

export const CustomerAddressFormGroup = () =>
  new FormBuilder().group({
    street: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    city: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    state: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    zip: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    customer: [null, []],
  });

export const CustomerAddressUpdateFormGroup = () =>
  new FormBuilder().group({
    street: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    city: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    state: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    zip: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
  });

export const CustomerAddressRawFormGroup = () =>
  new FormBuilder().group({
    street: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    city: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    state: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    zip: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
  });
