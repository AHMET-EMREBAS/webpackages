import { FormBuilder, Validators } from '@angular/forms';

export const SkuDetailFormGroup = new FormBuilder().group({
  color: [null, [Validators.maxLength(100)]],
  height: [null, [Validators.maxLength(100)]],
  width: [null, [Validators.maxLength(100)]],
  weight: [null, [Validators.maxLength(100)]],
  manual: [null, []],
  make: [null, [Validators.maxLength(100)]],
  model: [null, [Validators.maxLength(100)]],
  notes: [null, [Validators.maxLength(1000)]],
  website: [null, []],
  manufacturer: [null, [Validators.maxLength(100)]],
  highlight: [null, [Validators.maxLength(100)]],
  sku: [null, []],
});
