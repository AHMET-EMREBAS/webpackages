import { FormBuilder, Validators } from '@angular/forms';

export const SaleFormGroup = new FormBuilder().group({
  subTotal: [null, [Validators.required]],
  total: [null, [Validators.required]],
  creditCardPayment: [null, []],
  cashPayment: [null, []],
  balancePayment: [null, []],
  customerId: [null, [Validators.min(1)]],
  employeeId: [null, [Validators.min(1)]],
});
