import { FormBuilder, Validators } from '@angular/forms';

export const UserProfileFormGroup = () =>
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

export const UpdateUserProfileFormGroup = () =>
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
