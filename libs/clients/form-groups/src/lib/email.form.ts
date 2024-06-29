import { FormBuilder, Validators } from '@angular/forms';

export const EmailFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });

export const EmailUpdateFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });

export const EmailRawFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });
