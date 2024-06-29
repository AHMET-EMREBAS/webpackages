import { FormBuilder, Validators } from '@angular/forms';

export const ImgFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
    generatedName: [null, []],
  });

export const ImgUpdateFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });

export const ImgRawFormGroup = () =>
  new FormBuilder().group({
    title: [null, [Validators.minLength(3), Validators.maxLength(100)]],
  });
