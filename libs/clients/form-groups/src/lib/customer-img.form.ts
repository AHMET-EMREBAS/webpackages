import { FormBuilder, Validators } from '@angular/forms';

export const CustomerImgFormGroup = new FormBuilder().group({
  title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  generatedName: [null, []],
  user: [null, []],
});

export const UpdateCustomerImgFormGroup = new FormBuilder().group({
  title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
});
