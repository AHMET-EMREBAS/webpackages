import { FormBuilder, Validators } from '@angular/forms';

export const NotificationFormGroup = () =>
  new FormBuilder().group({
    message: [null, [Validators.maxLength(1000)]],
  });

export const NotificationUpdateFormGroup = () =>
  new FormBuilder().group({
    message: [null, [Validators.maxLength(1000)]],
  });

export const NotificationRawFormGroup = () =>
  new FormBuilder().group({
    message: [null, [Validators.maxLength(1000)]],
  });
