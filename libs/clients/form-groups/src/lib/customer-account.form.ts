import { FormBuilder, Validators } from '@angular/forms';

export const CustomerAccountFormGroup = () =>
  new FormBuilder().group({
    blance: [null, [Validators.required]],
    customer: [null, []],
    priceLevel: [null, []],
  });

export const UpdateCustomerAccountFormGroup = () =>
  new FormBuilder().group({
    blance: [null, [Validators.required]],
    customer: [null, []],
    priceLevel: [null, []],
  });
