import { FormBuilder, Validators } from '@angular/forms';

export const SkuFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  sku: [null, [Validators.required]],
  product: [null, []],
});
