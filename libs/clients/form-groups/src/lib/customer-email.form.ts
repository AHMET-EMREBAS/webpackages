import { FormBuilder, Validators } from '@angular/forms';

export const CustomerEmailFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
    customer: [null, []],
  });

export const CustomerEmailUpdateFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });

export const CustomerEmailRawFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });
