import { FormBuilder, Validators } from '@angular/forms';

export const SerialNumberFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
    serialNumber: [null, [Validators.minLength(3), Validators.maxLength(100)]],
    product: [null, []],
  });

export const SerialNumberUpdateFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
  });

export const SerialNumberRawFormGroup = () =>
  new FormBuilder().group({
    required: [null, []],
    type: [null, [Validators.required]],
    prefix: [null, []],
  });
