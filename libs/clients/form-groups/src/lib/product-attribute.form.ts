import { FormBuilder, Validators } from '@angular/forms';

export const ProductAttributeFormGroup = () =>
  new FormBuilder().group({
    key: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    value: [null, [Validators.maxLength(100), Validators.required]],
    product: [null, []],
  });

export const ProductAttributeUpdateFormGroup = () =>
  new FormBuilder().group({
    key: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    value: [null, [Validators.maxLength(100), Validators.required]],
    product: [null, []],
  });

export const ProductAttributeRawFormGroup = () =>
  new FormBuilder().group({
    key: [
      null,
      [Validators.minLength(1), Validators.maxLength(100), Validators.required],
    ],
    value: [null, [Validators.maxLength(100), Validators.required]],
    product: [null, []],
  });
