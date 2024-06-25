import { FormBuilder, Validators } from '@angular/forms';

export const UserFormGroup = new FormBuilder().group({
  username: [null, [Validators.email, Validators.required]],
  password: [null, [Validators.required]],
  permissions: [null, []],
  department: [null, []],
});
