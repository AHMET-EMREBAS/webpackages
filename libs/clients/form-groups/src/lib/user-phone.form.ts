import { FormBuilder, Validators } from '@angular/forms';

export const UserPhoneFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const UpdateUserPhoneFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });
