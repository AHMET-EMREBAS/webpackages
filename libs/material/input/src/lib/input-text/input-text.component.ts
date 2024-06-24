import { Component, Input } from '@angular/core';
import { InputComponent, InputModules } from '../input';
import { InputType } from '@webpackages/types';

@Component({
  selector: 'wp-input-text',
  standalone: true,
  imports: [InputModules],
  template: `
    <mat-form-field class="w-full">
      <mat-label>{{ inputLabel }} {{ statusIndicator$ | async }}</mat-label>
      <input
        type="text"
        matInput
        [required]="inputRequired"
        [formControl]="inputControl"
        [minlength]="inputMinLength"
        [maxLength]="inputMaxLength"
        [attr.data-testid]="inputLabel"
      />
      <mat-hint>{{ inputHint }}</mat-hint>
      <mat-error>{{ errorMessage$ | async }} </mat-error>
    </mat-form-field>
  `,
})
export class InputTextComponent extends InputComponent {
  override readonly inputType: InputType = 'text';
  @Input() override inputRequired = false;
  @Input() override inputMaxLength = Number.MAX_SAFE_INTEGER;
  @Input() override inputMinLength = 0;
}
