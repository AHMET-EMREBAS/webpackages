import { FormBuilder, Validators } from '@angular/forms';

export const ProductFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  upc: [
    null,
    [Validators.minLength(8), Validators.maxLength(13), Validators.required],
  ],
  category: [null, []],
  supplier: [null, []],
});
