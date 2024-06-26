import { FormBuilder, Validators } from '@angular/forms';

export const PurchaseFormGroup = () =>
  new FormBuilder().group({
    orderDate: [null, [Validators.required]],
    expectedShippingDate: [null, [Validators.required]],
    shippingDate: [null, []],
    subTotal: [null, [Validators.required]],
    total: [null, [Validators.required]],
    notes: [null, []],
    employee: [null, []],
  });

export const PurchaseUpdateFormGroup = () =>
  new FormBuilder().group({
    orderDate: [null, [Validators.required]],
    expectedShippingDate: [null, [Validators.required]],
    shippingDate: [null, []],
    subTotal: [null, [Validators.required]],
    total: [null, [Validators.required]],
    notes: [null, []],
  });

export const PurchaseRawFormGroup = () =>
  new FormBuilder().group({
    orderDate: [null, [Validators.required]],
    expectedShippingDate: [null, [Validators.required]],
    shippingDate: [null, []],
    subTotal: [null, [Validators.required]],
    total: [null, [Validators.required]],
    notes: [null, []],
  });
