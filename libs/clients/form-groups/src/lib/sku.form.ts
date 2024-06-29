import { FormBuilder, Validators } from '@angular/forms';

export const SkuFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    sku: [
      null,
      [Validators.minLength(6), Validators.maxLength(13), Validators.required],
    ],
    description: [null, [Validators.maxLength(1000)]],
    product: [null, []],
  });

export const SkuUpdateFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    sku: [
      null,
      [Validators.minLength(6), Validators.maxLength(13), Validators.required],
    ],
    description: [null, [Validators.maxLength(1000)]],
  });

export const SkuRawFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
    sku: [
      null,
      [Validators.minLength(6), Validators.maxLength(13), Validators.required],
    ],
    description: [null, [Validators.maxLength(1000)]],
  });
