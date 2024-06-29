import { FormBuilder, Validators } from '@angular/forms';

export const StoreFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    manager: [null, []],
  });

export const UpdateStoreFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    manager: [null, []],
  });
