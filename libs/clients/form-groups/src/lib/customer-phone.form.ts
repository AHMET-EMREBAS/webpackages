import { FormBuilder, Validators } from '@angular/forms';

export const CustomerPhoneFormGroup = new FormBuilder().group({
  phone: [null, [Validators.required]],
  user: [null, []],
});
