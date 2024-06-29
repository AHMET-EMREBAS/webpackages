import { FormBuilder, Validators } from '@angular/forms';

export const CartFormGroup = () =>
  new FormBuilder().group({
    complete: [null, []],
    customer: [null, []],
    employee: [null, []],
  });

export const UpdateCartFormGroup = () =>
  new FormBuilder().group({
    complete: [null, []],
  });
