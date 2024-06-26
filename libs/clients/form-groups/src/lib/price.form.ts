import { FormBuilder, Validators } from '@angular/forms';

export const PriceFormGroup = () =>
  new FormBuilder().group({
    price: [null, [Validators.required]],
    cost: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
    sku: [null, []],
    priceLevel: [null, []],
  });

export const PriceUpdateFormGroup = () =>
  new FormBuilder().group({
    price: [null, [Validators.required]],
    cost: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
  });

export const PriceRawFormGroup = () =>
  new FormBuilder().group({
    price: [null, [Validators.required]],
    cost: [null, [Validators.required]],
    startDate: [null, [Validators.required]],
    endDate: [null, [Validators.required]],
  });
