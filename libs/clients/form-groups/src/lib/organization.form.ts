import { FormBuilder, Validators } from '@angular/forms';

export const OrganizationFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  manager: [null, []],
});

export const UpdateOrganizationFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  manager: [null, []],
});
