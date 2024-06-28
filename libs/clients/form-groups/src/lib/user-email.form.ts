import { FormBuilder, Validators } from '@angular/forms';

export const UserEmailFormGroup = new FormBuilder().group({
  email: [null, [Validators.email, Validators.required]],
});

export const UpdateUserEmailFormGroup = new FormBuilder().group({
  email: [null, [Validators.email, Validators.required]],
});
