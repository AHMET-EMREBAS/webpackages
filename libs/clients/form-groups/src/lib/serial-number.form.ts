import { FormBuilder, Validators } from '@angular/forms';

export const SerialNumberFormGroup = new FormBuilder().group({
  serialNumber: [null, [Validators.min(5), Validators.required]],
  inStock: [null, [Validators.required]],
  generated: [null, []],
  sku: [null, []],
});
