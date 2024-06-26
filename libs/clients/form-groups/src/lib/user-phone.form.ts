import { FormBuilder, Validators } from '@angular/forms';

export const UserPhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
  user: [null, []],
});

export const UpdateUserPhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
  user: [null, []],
});
