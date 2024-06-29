import { FormBuilder, Validators } from '@angular/forms';

export const EmailFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });

export const UpdateEmailFormGroup = () =>
  new FormBuilder().group({
    email: [null, [Validators.email, Validators.required]],
  });
