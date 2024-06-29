import { FormBuilder, Validators } from '@angular/forms';

export const ProjectFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
  });

export const ProjectUpdateFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
  });

export const ProjectRawFormGroup = () =>
  new FormBuilder().group({
    name: [
      null,
      [Validators.minLength(3), Validators.maxLength(100), Validators.required],
    ],
  });
