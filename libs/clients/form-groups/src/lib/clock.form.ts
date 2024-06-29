import { FormBuilder, Validators } from '@angular/forms';

export const ClockFormGroup = () =>
  new FormBuilder().group({
    starDate: [null, [Validators.required]],
    endDate: [null, []],
    employee: [null, []],
  });

export const ClockUpdateFormGroup = () =>
  new FormBuilder().group({
    endDate: [null, []],
  });

export const ClockRawFormGroup = () =>
  new FormBuilder().group({
    endDate: [null, []],
  });
