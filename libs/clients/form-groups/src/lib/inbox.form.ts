import { FormBuilder, Validators } from '@angular/forms';

export const InboxFormGroup = () =>
  new FormBuilder().group({
    employee: [null, []],
  });

export const InboxUpdateFormGroup = () => new FormBuilder().group({});

export const InboxRawFormGroup = () => new FormBuilder().group({});
