import { FormBuilder, Validators } from '@angular/forms';

export const CartFormGroup = () =>
  new FormBuilder().group({
    complete: [null, []],
    customer: [null, []],
    employee: [null, []],
  });

export const CartUpdateFormGroup = () =>
  new FormBuilder().group({
    complete: [null, []],
  });

export const CartRawFormGroup = () =>
  new FormBuilder().group({
    complete: [null, []],
  });
