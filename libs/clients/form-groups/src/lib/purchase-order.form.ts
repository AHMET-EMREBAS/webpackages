import { FormBuilder, Validators } from '@angular/forms';

export const PurchaseOrderFormGroup = new FormBuilder().group({
  price: [null, [Validators.required]],
  quantity: [null, [Validators.min(1), Validators.required]],
  subTotal: [null, [Validators.required]],
  total: [null, [Validators.required]],
  purchase: [null, []],
  sku: [null, []],
});
