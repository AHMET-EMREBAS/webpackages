import { FormBuilder, Validators } from '@angular/forms';

export const NotificationFormGroup = new FormBuilder().group({
  message: [null, [Validators.maxLength(1000)]],
});
