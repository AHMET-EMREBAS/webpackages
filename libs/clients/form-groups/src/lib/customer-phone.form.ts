import { FormBuilder, Validators } from '@angular/forms';

export const CustomerPhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
  user: [null, []],
});

export const UpdateCustomerPhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
});
