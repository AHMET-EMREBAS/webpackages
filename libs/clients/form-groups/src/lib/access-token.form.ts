import { FormBuilder, Validators } from '@angular/forms';

export const AccessTokenFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  token: [
    null,
    [Validators.minLength(10), Validators.maxLength(100), Validators.required],
  ],
  user: [null, []],
});

export const UpdateAccessTokenFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  token: [
    null,
    [Validators.minLength(10), Validators.maxLength(100), Validators.required],
  ],
  user: [null, []],
});
