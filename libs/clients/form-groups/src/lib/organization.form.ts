import { FormBuilder, Validators } from '@angular/forms';

export const OrganizationFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    managerEmployee: [null, []],
  });

export const OrganizationUpdateFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    managerEmployee: [null, []],
  });

export const OrganizationRawFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    managerEmployee: [null, []],
  });
