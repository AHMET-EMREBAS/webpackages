import { FormBuilder, Validators } from '@angular/forms';

export const UserFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    department: [null, []],
  });

export const UserUpdateFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    department: [null, []],
  });

export const UserRawFormGroup = () =>
  new FormBuilder().group({
    username: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    permissions: [null, []],
    department: [null, []],
  });
