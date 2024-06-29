import { FormBuilder, Validators } from '@angular/forms';

export const AddressFormGroup = () =>
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

export const AddressUpdateFormGroup = () =>
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

export const AddressRawFormGroup = () =>
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
