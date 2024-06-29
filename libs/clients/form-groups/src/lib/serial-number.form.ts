import { FormBuilder, Validators } from '@angular/forms';

export const SerialNumberFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
    suffix: [null, []],
    serialNumber: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    product: [null, []],
  });

export const SerialNumberUpdateFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
    suffix: [null, []],
  });

export const SerialNumberRawFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
    suffix: [null, []],
  });
