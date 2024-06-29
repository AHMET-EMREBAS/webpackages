import { FormBuilder, Validators } from '@angular/forms';

export const UserImgFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
    generatedName: [null, []],
  });

export const UpdateUserImgFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });
