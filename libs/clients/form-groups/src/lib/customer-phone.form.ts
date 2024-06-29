import { FormBuilder, Validators } from '@angular/forms';

export const CustomerPhoneFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
    customer: [null, []],
  });

export const CustomerPhoneUpdateFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });

export const CustomerPhoneRawFormGroup = () =>
  new FormBuilder().group({
    phone: [null, [Validators.required]],
  });
