import { FormBuilder, Validators } from '@angular/forms';

export const CustomerFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    priceLevel: [null, []],
  });

export const CustomerUpdateFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    priceLevel: [null, []],
  });

export const CustomerRawFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    priceLevel: [null, []],
  });
