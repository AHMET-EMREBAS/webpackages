import { FormBuilder, Validators } from '@angular/forms';

export const SerialNumberFormGroup = new FormBuilder().group({
  serialNumber: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  inStock: [null, []],
  generated: [null, []],
  sku: [null, []],
});
