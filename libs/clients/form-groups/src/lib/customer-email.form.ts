import { FormBuilder, Validators } from '@angular/forms';

export const CustomerEmailFormGroup = new FormBuilder().group({
  email: [null, [Validators.email, Validators.required]],
  user: [null, []],
});
