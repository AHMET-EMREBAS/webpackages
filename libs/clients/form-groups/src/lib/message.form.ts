import { FormBuilder, Validators } from '@angular/forms';

export const MessageFormGroup = new FormBuilder().group({
  message: [null, [Validators.maxLength(2000)]],
  readDate: [null, []],
  user: [null, []],
  to: [null, []],
});