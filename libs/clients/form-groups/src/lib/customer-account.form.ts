import { FormBuilder, Validators } from '@angular/forms';

export const CustomerAccountFormGroup = () =>
  new FormBuilder().group({
    blance: [null, [Validators.required]],
    customer: [null, []],
    priceLevel: [null, []],
  });

export const CustomerAccountUpdateFormGroup = () =>
  new FormBuilder().group({
    blance: [null, [Validators.required]],
    customer: [null, []],
    priceLevel: [null, []],
  });

export const CustomerAccountRawFormGroup = () =>
  new FormBuilder().group({
    blance: [null, [Validators.required]],
    customer: [null, []],
    priceLevel: [null, []],
  });
