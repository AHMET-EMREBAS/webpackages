import { FormBuilder, Validators } from '@angular/forms';

export const QuantityFormGroup = () =>
  new FormBuilder().group({
    quantity: [null, [Validators.required]],
    alert: [null, []],
    alertUnderQuantity: [null, []],
    autoRepurchase: [null, []],
    notSellLastOne: [null, []],
    sku: [null, []],
    store: [null, []],
  });

export const QuantityUpdateFormGroup = () =>
  new FormBuilder().group({
    quantity: [null, [Validators.required]],
    alert: [null, []],
    alertUnderQuantity: [null, []],
    autoRepurchase: [null, []],
    notSellLastOne: [null, []],
  });

export const QuantityRawFormGroup = () =>
  new FormBuilder().group({
    quantity: [null, [Validators.required]],
    alert: [null, []],
    alertUnderQuantity: [null, []],
    autoRepurchase: [null, []],
    notSellLastOne: [null, []],
  });
