import { FormBuilder, Validators } from '@angular/forms';

export const InboxFormGroup = () =>
  new FormBuilder().group({
    employee: [null, []],
  });

export const UpdateInboxFormGroup = () => new FormBuilder().group({});
