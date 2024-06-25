import { FormBuilder, Validators } from '@angular/forms';

export const ClockFormGroup = new FormBuilder().group({
  starDate: [null, [Validators.required]],
  endDate: [null, []],
  user: [null, []],
});
