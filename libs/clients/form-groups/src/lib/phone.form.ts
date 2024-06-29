import { FormBuilder, Validators } from '@angular/forms';

export const PhoneFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const PhoneUpdateFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const PhoneRawFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });
