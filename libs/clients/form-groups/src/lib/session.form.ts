import { FormBuilder, Validators } from '@angular/forms';

export const SessionFormGroup = new FormBuilder().group({
  scope: [null, []],
  deviceId: [null, [Validators.required]],
  token: [null, [Validators.required]],
  user: [null, []],
});
