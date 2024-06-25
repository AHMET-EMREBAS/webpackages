import { FormBuilder, Validators } from '@angular/forms';

export const SupplierFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
});
