import { FormBuilder, Validators } from '@angular/forms';

export const SerialNumberFormGroup = new FormBuilder().group({
  serialNumber: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  required: [null, []],
  type: [null, [Validators.required]],
  prefix: [null, []],
  suffix: [null, []],
  sku: [null, []],
});

export const UpdateSerialNumberFormGroup = new FormBuilder().group({
  prefix: [null, []],
  suffix: [null, []],
});
