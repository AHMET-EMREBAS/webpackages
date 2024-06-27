import { FormBuilder, Validators } from '@angular/forms';

export const PhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
});

export const UpdatePhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
});
