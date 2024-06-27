import { FormBuilder, Validators } from '@angular/forms';

export const SkuFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  sku: [
    null,
    [Validators.minLength(6), Validators.maxLength(13), Validators.required],
  ],
  product: [null, []],
});

export const UpdateSkuFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  sku: [
    null,
    [Validators.minLength(6), Validators.maxLength(13), Validators.required],
  ],
});
