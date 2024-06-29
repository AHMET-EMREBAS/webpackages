import { FormBuilder, Validators } from '@angular/forms';

export const CustomerImgFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
    generatedName: [null, []],
    customer: [null, []],
  });

export const CustomerImgUpdateFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });

export const CustomerImgRawFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });
