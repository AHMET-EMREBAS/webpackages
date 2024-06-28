import { FormBuilder, Validators } from '@angular/forms';

export const TaskFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  tags: [null, []],
  difficulty: [null, []],
  status: [null, []],
  startDate: [null, []],
  endDate: [null, []],
  dueDate: [null, [Validators.required]],
  users: [null, []],
});

export const UpdateTaskFormGroup = new FormBuilder().group({
  name: [
    null,
    [Validators.minLength(3), Validators.maxLength(100), Validators.required],
  ],
  description: [null, [Validators.maxLength(1000)]],
  tags: [null, []],
  difficulty: [null, []],
  status: [null, []],
  startDate: [null, []],
  endDate: [null, []],
  dueDate: [null, [Validators.required]],
  users: [null, []],
});
