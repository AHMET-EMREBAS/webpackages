import { FormBuilder, Validators } from '@angular/forms';

export const InboxFormGroup = new FormBuilder().group({
  user: [null, []],
});
