import { FormBuilder, Validators } from '@angular/forms';

export const ProductFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
  ],
  upc: [
    null,
    [Validators.required, Validators.minLength(8), Validators.maxLength(13)],
  ],
  description: [null, [Validators.maxLength(1000)]],
  category: [null],
  supplier: [null],
});


// Validators.max()
// Validators.min()
// Validators.minLength()
// Validators.maxLength()
// Validators.required()
// Validators.email()

