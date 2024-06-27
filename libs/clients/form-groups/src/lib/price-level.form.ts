import { FormBuilder, Validators } from '@angular/forms';

export const PriceLevelFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  currency: [
    null,
    [Validators.minLength(1), Validators.maxLength(10), Validators.required],
  ],
  taxrate: [null, [Validators.required]],
});

export const UpdatePriceLevelFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  currency: [
    null,
    [Validators.minLength(1), Validators.maxLength(10), Validators.required],
  ],
  taxrate: [null, [Validators.required]],
});
