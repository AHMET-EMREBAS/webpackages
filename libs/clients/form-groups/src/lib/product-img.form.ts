import { FormBuilder, Validators } from '@angular/forms';

export const ProductImgFormGroup = new FormBuilder().group({
  title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  generatedName: [null, []],
  product: [null, []],
});

export const UpdateProductImgFormGroup = new FormBuilder().group({
  title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
});
