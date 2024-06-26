import { FormBuilder, Validators } from '@angular/forms';

export const ClockFormGroup = new FormBuilder().group({
  starDate: [null, [Validators.required]],
  endDate: [null, []],
  user: [null, []],
});

export const UpdateClockFormGroup = new FormBuilder().group({
  endDate: [null, []],
});
