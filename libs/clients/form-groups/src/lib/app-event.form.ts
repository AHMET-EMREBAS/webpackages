import { FormBuilder, Validators } from '@angular/forms';

export const AppEventFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    payload: [null, []],
  });

export const UpdateAppEventFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    payload: [null, []],
  });
