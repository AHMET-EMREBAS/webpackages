import { FormBuilder, Validators } from '@angular/forms';

export const UserPhoneFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const UserPhoneUpdateFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const UserPhoneRawFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });
