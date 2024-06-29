import { FormBuilder, Validators } from '@angular/forms';

export const ProfileFormGroup = () =>
  new FormBuilder().group({
    firstName: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    lastName: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    middleName: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });

export const UpdateProfileFormGroup = () =>
  new FormBuilder().group({
    firstName: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    lastName: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    middleName: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });
