import { FormBuilder, Validators } from '@angular/forms';

export const DiscountFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  fixedDiscount: [null, []],
  percentDiscount: [null, []],
  startDate: [null, [Validators.required]],
  endDate: [null, [Validators.required]],
  sku: [null, []],
  priceLevel: [null, []],
});
