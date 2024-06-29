import { FormBuilder, Validators } from '@angular/forms';

export const AccessTokenFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    token: [null, [Validators.minLength(10), Validators.maxLength(100)]],
    permissions: [null, []],
  });

export const AccessTokenUpdateFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
  });

export const AccessTokenRawFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
  });
