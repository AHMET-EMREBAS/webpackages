import { FormBuilder, Validators } from '@angular/forms';

export const OrderFormGroup = () =>
  new FormBuilder().group({
    unitPrice: [null, [Validators.required]],
    subTotal: [null, [Validators.required]],
    quantity: [null, [Validators.min(1)]],
    sku: [null, []],
    cart: [null, []],
    discount: [null, []],
  });

export const OrderUpdateFormGroup = () =>
  new FormBuilder().group({
    unitPrice: [null, [Validators.required]],
    subTotal: [null, [Validators.required]],
    quantity: [null, [Validators.min(1)]],
    discount: [null, []],
  });

export const OrderRawFormGroup = () =>
  new FormBuilder().group({
    unitPrice: [null, [Validators.required]],
    subTotal: [null, [Validators.required]],
    quantity: [null, [Validators.min(1)]],
    discount: [null, []],
  });
